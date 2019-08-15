<template>
    <div>
        <transition name="el-zoom-in-center">
            <div class="task">
                <div class="task-1"
                     v-for="task in tasks">
                    <p align="center">{{task.label}}</p>
                    <div class="task-content" style="min-height: 5px">
                        <draggable :group="task" :list="task.data" @change="change($event)"
                                   style="padding: 5px;" @end="end" @add="add" :id="task.name">
                            <!--          todo 拖动的id 是本列的最后一个的id                   -->
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
                    <transition name="el-zoom-in-top">
                        <div class="add-item-area" v-show="task.addTaskAreaVisible"
                             @click.stop="">

                            <el-input
                                    type="textarea"
                                    :autosize="{ minRows: 3, maxRows: 8}"
                                    placeholder="任务内容"
                                    v-model="newItem.describe">
                            </el-input>
                            <div style="display: flex;flex-direction: row;justify-content: flex-start;margin: 7px">
                                <el-button type="primary" size="mini" round @click="privateSaveNewItem(task)">确定
                                </el-button>
                                <el-button plain round @click.stop="task.addTaskAreaVisible = false" size="mini">取消
                                </el-button>
                            </div>
                        </div>
                    </transition>

                </div>
            </div>
        </transition>

        <el-dialog
                :title="dialog.title"
                :visible.sync="dialog.visible"
                width="30%"
                :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                    <el-button @click="handleClose">取 消</el-button>
                    <el-button type="primary" @click="dialog.visible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    import TaskItem from "../../components/TaskItem";
    import AutoLoadPager from "../../components/AutoLoadPager";


    export default {
        name: "Home",
        components: {draggable, TaskItem},
        extends: AutoLoadPager,
        data() {
            return {
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
                group: {
                    inbox: {name: "inbox", put: true},
                    todo: {name: "inbox", put: true},
                    nextStep: {name: "nextStep", put: true},
                    later: {name: "later", put: true}
                },
                tasks: [
                    // 收件箱
                    {name: "inbox", data: [], label: "收件箱", addTaskAreaVisible: false, put: true},
                    // 今天要做
                    {name: "todo", data: [], label: "今天要做", addTaskAreaVisible: false, put: true},
                    // 下一步要做
                    {name: "nextStep", data: [], label: "下一步要做", addTaskAreaVisible: false, put: true},
                    // 以后再做
                    {name: "later", data: [], label: "以后再做", addTaskAreaVisible: false, put: true}
                ]
            }
        },
        methods: {
            add(evt) {
                let t = {id: parseInt(evt.item.id), box: evt.to.id}
                console.log("更新", t)
                this.$api.task.update(t).then(res => {
                    this.init()
                })

            },
            end(evt) {
                // console.log("事件 ", evt)
                // console.log("拖动本身", evt.item, "目标列表", evt.to)
                // evt.from  // 可以知道之前的列表
                // evt.oldIndex  // 可以知道拖动前的位置
                // evt.newIndex  // 可以知道拖动后的位置

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
                this.openDialog(task, item, "任务详情")

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
            },
            change(e) {
                console.log(e)

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
        padding: 7px;
        align-items: center;
        cursor: pointer
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
        display: block;
        overflow-wrap: unset;
    }

    /*todo 怎么把width 设置成25%  盒子还能够在一行展示*/
    .task-1 {
        display: inline-flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 24%;
        margin: 7px;
        background: #fff;
        border-radius: 3px;
    }

    .task-content {
        margin: 3px;
        background: #EEEEEE;
        display: flex;
        flex-direction: column
    }
</style>