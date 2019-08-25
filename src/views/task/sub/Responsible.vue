<template>
    <div>
        <div style="width: 100%;display: flex;justify-content: space-between;margin-top: 7px;">
            <div style="width: 25%;flex-grow: 1;flex-basis: auto;background: white;align-self: flex-start;margin-left: 7px;margin-right: 7px"
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
        <el-dialog
                :title="dialog.title"
                :visible.sync="dialog.visible"
                width="45%"
                @closed="init"
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
            <div style="display: flex;justify-content: space-between;flex-grow: 1;margin-top: 7px">
                <div style="width: 20%;align-items: center;display: flex;justify-content: flex-start">
                    <span class="el-icon-remove-outline" style="font-size: 50px;color: orangered"></span>
                    <div style="margin-left: 7px;display: flex;flex-direction: column;">
                        <span>未开始</span>
                        <span style="color: #929292;font-size: smaller">当前状态</span>
                    </div>
                </div>

                <!--      下拉框   选择负责人          -->


                <div style="width: 20%;align-items: center;display: flex;justify-content: flex-start">


                    <el-dropdown trigger="click" @command="changeLeader">
                        <div class="avatar">作伟</div>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item v-for="u in projectUsers" :key="u.id" :command="u.id">{{u.nickName}}
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>

                    <div style="margin-left: 14px;display: flex;flex-direction: column;">
                        <span>贺作伟</span>
                        <span style="color: #929292;font-size: smaller">负责人</span>
                    </div>
                </div>


                <div style="width: 20%;align-items: center;display: flex;justify-content: flex-start">
                    <span class="el-icon-alarm-clock" style="font-size: 50px;color: #939393"></span>
                    <div style="margin-left: 7px;display: flex;flex-direction: column;">
                        <span>todo</span>
                        <span style="color: #929292;font-size: smaller">开始时间</span>
                    </div>
                </div>
                <div style="width: 20%;align-items: center;display: flex;justify-content: flex-start">
                    <span class="el-icon-alarm-clock" style="font-size: 50px;color: #939393"></span>
                    <div style="margin-left: 7px;display: flex;flex-direction: column;">
                        <span>todo</span>
                        <span style="color: #929292;font-size: smaller">结束时间</span>
                    </div>
                </div>
            </div>
            <div slot="footer" class="dialog-footer" style="border-top: #eee solid 1px;padding-top: 14px">
                <el-input
                        type="text"
                        show-word-limit
                        autosize
                        placeholder="todo 写评论"
                        :maxlength="200"
                        :autosize="{ minRows: minRows}"
                        @blur="minRows = 1"
                        @focus="minRows = 10"
                        v-model="newComment">
                    <!--                    <div slot="suffix">-->
                    <!--                        <el-button type="primary" size="mini" round>发送</el-button>-->
                    <!--                        <el-button size="mini">取消</el-button>-->
                    <!--                    </div>-->
                </el-input>
            </div>
        </el-dialog>
    </div>
</template>


<script>
    import draggable from 'vuedraggable'
    import AutoLoadPager from "../../../components/AutoLoadPager";
    import TaskItem from "../../../components/TaskItem";
    import mp3 from '../../../assets/tip.mp3'


    export default {
        name: "Responsible",
        components: {draggable, TaskItem},
        extends: AutoLoadPager,
        data() {
            return {
                ws:null,
                projectUsers: [],
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
            playTips() {
                let notify = this.$notify({
                    title: '新的任务',
                    message: '您有新的任务，请前往任务收件箱查看。',
                    position: 'bottom-right',
                    type: 'success',
                    onClick: function () {
                        console.log('点击了')
                        notify.close()
                    },
                    duration: 10000
                });
                this.init()

                let audio = new Audio();
                audio.src = mp3;
                audio.play()
            },
            changeLeader(userid) {
                console.log('更改', this.dialog.item, userid)
                this.dialog.item.leader = userid
                this.dialog.item.box = 'inbox'
                this.$api.task.update(this.dialog.item).then(res => {
                    this.$message.success('分配成功')
                    this.$api.ws.dispatch(userid,"hello")


                })
            },
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
            },
            loadProjectUsers() {
                this.$api.user.list().then(res => {
                    this.projectUsers = res.data.data
                    console.log("projectUsers", this.projectUsers)


                })
            },
            initWebSocket() {
                let userId = window.localStorage.getItem("id")
                console.log('当前的user', userId)
                // todo 检查 localStorage
                this.ws = new WebSocket('ws://127.0.0.1:9900/ws/' + userId)
                let that = this
                this.ws.onmessage = function (msg) {
                    that.playTips()
                }
                this.ws.onopen = function () {
                    console.log('连接完成')
                }
            }
        },
        mounted() {

            this.initWebSocket()
            this.loadProjectUsers()
            let _this = this
            document.onclick = function () {
                for (let t of _this.tasks) {
                    t.addTaskAreaVisible = false
                    _this.newItem = {}
                }
            }
        },
        destroyed() {
            let userId = window.localStorage.getItem("id")
            this.$api.ws.offline(userId)
            console.log('销毁websocket')
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

    .avatar {
        width: 45px;
        height: 45px;
        border-radius: 50px;
        /*//#66CCFF*/
        background: #9966FF;
        font-size: 16px;
        color: white;
        align-items: center;
        justify-content: center;
        align-self: center;
        display: flex;
        padding: 1px;
        cursor: pointer;
    }


</style>