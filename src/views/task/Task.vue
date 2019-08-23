<template>
    <div>
        <transition name="el-zoom-in-center">
            <div class="task">
                <project-side-bar
                        style="width: 260px;margin-left: -11px;margin-right: 0px"></project-side-bar>
                <div style="width: 100%;">
                    <div style="display: flex;justify-content: center;background:white;border-bottom: 1px solid #eee">
                        <el-menu default-active="1" class="el-menu-demo" mode="horizontal" style="height: 55px">
                            <el-menu-item index="1">我负责的</el-menu-item>
                            <el-menu-item index="3">我分配的</el-menu-item>
                            <el-menu-item index="4">我参与的</el-menu-item>
                            <el-menu-item index="5">我创建的</el-menu-item>
                        </el-menu>
                    </div>
                    <!--  盒子区域              //-->
                    <div style="width: 100%;display: flex;justify-content: space-between;margin-top: 7px;">
                        <div style="flex-grow: 1;flex-basis: auto;background: white;align-self: flex-start;margin-left: 7px;margin-right: 7px"
                             v-for="task in tasks">
                            <p align="center">{{task.label}}</p>

                            <div class="task-content" style="min-height: 5px;">
                                <draggable :group="group" :list="task.data"
                                           style="padding: 5px;" :id="task.name" @start="start" @end="end" :move="move">
                                    <div :key="'k'+index" v-for="(i,index) in task.data"
                                         @click="taskDetail(task,i)" :id="i.id">
                                        <task-item :item="i"></task-item>
                                    </div>
                                </draggable>
                            </div>


                            <div class="add-item" @click.stop="openAddTask(task)" v-if="!task.addTaskAreaVisible">
                                <div>
                                    <span class="el-icon-plus add-item-1"></span>
                                    <span class="add-item-2">添加新任务</span>
                                </div>
                            </div>

                            <!--                        // 添加区域-->
                            <transition name="el-zoom-in-top">
                                <div class="add-item-area" v-show="task.addTaskAreaVisible"
                                     @click.stop="">
                                    <el-input
                                            type="textarea"
                                            size="mini"
                                            :autosize="{ minRows: 3, maxRows: 8}"
                                            placeholder="输入任务内容"
                                            v-model="newItem.describe">
                                    </el-input>
                                    <div style="display: flex;flex-direction: row;justify-content: flex-start;margin: 7px">
                                        <el-button type="primary" size="mini" round @click="privateSaveNewItem(task)">确定
                                        </el-button>
                                        <el-button plain round @click.stop="task.addTaskAreaVisible = false"
                                                   size="mini">取消
                                        </el-button>
                                    </div>
                                </div>
                            </transition>

                        </div>
                    </div>
                </div>


            </div>
        </transition>

        <el-dialog
                :title="dialog.title"
                :visible.sync="dialog.visible"
                width="45%"
                :before-close="handleClose" :show-close="false">
            <div slot="title"
                 style="display: flex;justify-content: space-between;border-bottom: #eee 1px solid;padding-bottom: 10px">
                <span>{{dialog.item.name}}</span>
                <div style="color: #a8a8a8">


                    <el-dropdown trigger="click" @command="setting">
                        <span style="margin-left: 14px;cursor: pointer;" class="el-icon-more-outline"></span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>设置每日循环任务</el-dropdown-item>
                            <el-dropdown-item command="onfile">归档</el-dropdown-item>
                            <el-dropdown-item command="delete">
                                <span color="#F56C6C">删除</span>
                            </el-dropdown-item>
                            <!--                            <span style="cursor: pointer" class="el-icon-delete" @click="deleteTask">删除</span>-->
                        </el-dropdown-menu>
                    </el-dropdown>


                    <span style="margin-left: 14px;cursor: pointer;" class="el-icon-close"
                          @click="dialog.visible = false"></span>
                </div>
            </div>
            <p style="font-size: 20px;color: #333333;margin: 0px">{{dialog.item.describe}}</p>
            <div slot="footer" class="dialog-footer" style="border-top: #eee solid 1px;padding-top: 14px">
                <el-input
                        type="text"
                        show-word-limit
                        autosize
                        placeholder="写评论"
                        :maxlength="200"
                        :autosize="{ minRows: minRows}"
                        @blur="minRows = 1"
                        @focus="minRows = 10"
                        v-model="newComment">
                    <div slot="suffix">
                        <el-button type="primary" size="mini" round>发送</el-button>
                        <el-button size="mini">取消</el-button>
                    </div>
                </el-input>
            </div>
        </el-dialog>

    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    import TaskItem from "../../components/TaskItem";
    import AutoLoadPager from "../../components/AutoLoadPager";
    import ProjectSideBar from "../../components/ProjectSideBar";


    export default {
        name: "Home",
        components: {draggable, TaskItem, ProjectSideBar},
        extends: AutoLoadPager,
        data() {
            return {
                viewType: "",
                minRows: 1,
                maxRows: 1,
                newComment: "",
                changedTask: {},
                newItem: {},
                dialog: {
                    visible: false,
                    title: "",
                    item: {}
                },
                inject: ['context'],
                context: this,
                api: this.$api.task,
                callback: this.grouping,
                params: {onFile: false}, // list查询参数
                group: {name: "group", put: true},
                tasks: [
                    // 收件箱
                    {name: "inbox", data: [], label: "收件箱", addTaskAreaVisible: false},
                    // 今天要做
                    {name: "todo", data: [], label: "今天要做", addTaskAreaVisible: false},
                    // 下一步要做
                    {name: "nextStep", data: [], label: "下一步要做", addTaskAreaVisible: false},
                    // 以后再做
                    {name: "later", data: [], label: "以后再做", addTaskAreaVisible: false}
                ]
            }
        },
        methods: {
            handleClick() {
                console.log('handle')
            },
            setting(cmd) {
                if (cmd === "delete") {
                    this.deleteTask()
                } else if (cmd === 'onfile') {
                    this.onFile()
                }
            },
            onFile() {
                console.log("归档")
                this.dialog.item.onFile = true
                this.$api.task.update(this.dialog.item).then(() => {
                    this.dialog.visible = false
                    this.dialog.item = {}
                    this.init()
                })

            },
            deleteTask() {

                this.$confirm('确定删除任务' + this.dialog.item.name + "?", '删除', {
                    type: 'warning'
                }).then(() => {
                    this.$api.task.delete(this.dialog.item.id).then(() => {
                        this.dialog.visible = false
                        this.dialog.item = {}
                        this.init()
                    })

                }).catch(() => {
                })
            },
            start(e) {
                console.log("拖动的任务编号是", e.item.id, "拖动的盒子是", e.from.id)
                this.changedTask = {id: parseInt(e.item.id), box: e.from.id}
            },
            end(e) {
                let id = parseInt(e.clone.id)
                let box = e.to.id
                console.log("是否更新", id === this.changedTask.id && box !== this.changedTask.box, id === this.changedTask.id, box !== this.changedTask.box)
                console.log(id, this.changedTask.id)
                if (id === this.changedTask.id && box !== this.changedTask.box) {
                    this.changedTask.box = box
                    this.$api.task.update(this.changedTask).then(res => {
                        this.changedTask = {}
                        this.init()
                    })
                }
            },
            move: function (evt, originalEvent) {
                // console.log("move",evt)
                // console.log("move",originalEvent) //鼠标位置
            },
            // 创建自己的task
            privateSaveNewItem(task) {
                console.log("save new item")
                this.newItem.box = task.name
                this.newItem.kind = "private"
                this.$api.task.create(this.newItem).then((res) => {
                    this.init()
                })
                // 初始化newItem

                task.addTaskAreaVisible = false
                this.newItem = {}

            },
            resetAddArea() {
                this.newItem = {}
                for (let t of this.tasks) {
                    t.addTaskAreaVisible = false
                }
            },
            taskDetail(task, item) {
                console.log("show task detail")
                this.dialog.visible = true
                this.dialog.item = item


            },
            openAddTask(task) {
                // 关闭所有
                this.resetAddArea()
                // 打开当前
                task.addTaskAreaVisible = true
            },
            handleClose() {
                console.log("%c重置 dialog", "color:red")
                this.dialog.visible = false
            },
            // dataInit是回调函数  这里不能够用当前上下文来操作数据
            grouping() {
                let hash = {inbox: 0, todo: 1, nextStep: 2, later: 3}
                // todo 改成循环 初始化盒子
                this.context.tasks[0].data = []
                this.context.tasks[1].data = []
                this.context.tasks[2].data = []
                this.context.tasks[3].data = []

                for (let item of this.context.items) {
                    // 判断box类型是否符合规范
                    if (hash[item.box] !== undefined) {
                        let box = this.context.tasks[hash[item.box]].data
                        switch (item.box) {
                            case "inbox":
                                box.push(item);
                                break;
                            case "todo":
                                box.push(item);
                                break;
                            case "nextStep":
                                box.push(item);
                                break;
                            case "later":
                                box.push(item);
                                break;
                        }
                    } else {
                        console.log("%c当前box类型错误" + JSON.stringify(item), "color: blue")
                    }

                }
            }
        },
        mounted() {
            let _this = this
            document.onclick = function () {
                for (let t of _this.tasks) {
                    t.addTaskAreaVisible = false
                    _this.newItem = {}
                }
            }
        }
    }
</script>

<style scoped>

    .add-item {
        display: flex;
        justify-content: center;
        height: 40px;
        align-items: center;
        cursor: pointer
    }

    .add-item-area {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        padding: 7px;
    }

    .add-item-1 {
        font-size: larger;
        background: white;
    }

    .add-item-2 {
        margin-left: 7px;
        color: #818181;
        font-size: 12px
    }

    .task {
        display: flex;
        justify-content: space-between;
    }

    /*todo 怎么把width 设置成25%  盒子还能够在一行展示*/
    .task-1 {
        display: inline-flex;
        flex-direction: column;
        justify-content: flex-start;
        background: #fff;
        border-radius: 3px;
    }

    .task-content {
        margin: 3px;
        background: #EEEEEE;
        display: flex;
        flex-direction: column
    }

    .parent-task {
        display: block;
        overflow-wrap: unset;

    }


</style>