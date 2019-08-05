<template>
    <div>
        <el-row>
            <el-col :span="6" style="height: 80vh;padding: 10px;" v-for="task in tasks">
                <p align="center">{{task.label}}</p>
                <draggable :group="group.inbox" :list="task.data" @change="change"
                           style="padding: 5px;min-height: 20px">
                    <transition-group>
                        <task-item :key="'k'+index" v-for="(i,index) in task.data"
                                   style="margin-bottom: 10px" :item="i"></task-item>
                    </transition-group>
                </draggable>

            </el-col>

        </el-row>
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
                    {name: "inbox", data: [], label: "收件箱"},
                    // 今天要做
                    {name: "todo", data: [], label: "今天要做"},
                    // 下一步要做
                    {name: "nextStep", data: [], label: "下一步要做"},
                    // 以后再做
                    {name: "later", data: [], label: "以后再做"}
                ]
            }
        },
        methods: {
            // dataInit是回调函数  这里不能够用当前上下文来操作数据
            grouping() {
                console.log("数据初始化函数")
                let hash = {inbox: 0, todo: 1, nextStep: 2, later: 3}
                for (let item of this.context.items) {
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
                }
                console.log("处理后的任务", this.context.tasks)
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
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 480px;
    }

</style>