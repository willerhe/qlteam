<template>
    <div class="task">
        <div class="task-1"
             v-for="task in tasks">
            <p align="center">{{task.label}}</p>
            <div class="task-content">
                <draggable :group="group.inbox" :list="task.data" @change="change"
                           style="padding: 5px;">
                    <task-item :key="'k'+index" v-for="(i,index) in task.data" :item="i"></task-item>
                </draggable>
            </div>
            <div class="add-item">
                <span class="el-icon-plus add-item-1"></span>
                <span class="add-item-2">添加新任务</span>
            </div>
        </div>
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


    .add-item {
        display: flex;
        justify-content: center;
        height: 40px;
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