<template>
    <div>
        <transition name="el-zoom-in-center">
            <div class="task">
                <div class="task-1"
                     v-for="task in tasks">
                    <p align="center">{{task.label}}</p>
                    <div class="task-content">
                        <draggable :group="group.inbox" :list="task.data" @change="change"
                                   style="padding: 5px;">
                            <div :key="'k'+index" v-for="(i,index) in task.data"
                                 @click="taskDetail(task,i)">
                                <task-item :item="i"></task-item>
                            </div>
                        </draggable>
                    </div>
                    <div class="add-item"  @click="openAddTask(task)">
                        <div>
                            <span class="el-icon-plus add-item-1"></span>
                            <span class="add-item-2">添加新任务</span>
                        </div>
                    </div>
                    <transition name="el-zoom-in-top">
                        <div class="add-item-area" style="border: 1px solid red" v-show="task.addTaskAreaVisible">
                            <p>1</p>
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
            taskDetail(task, item) {
                console.log("show task detail")
                this.openDialog(task, item, "任务详情")

            },
            openAddTask(task) {
                // 关闭所有
                for (let t of this.tasks) {
                    t.addTaskAreaVisible = false
                }
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
        justify-content: center;
        height: 100px;
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
    }

    .task-content {
        margin: 3px;
        background: #EEEEEE;
        display: flex;
        flex-direction: column
    }
</style>