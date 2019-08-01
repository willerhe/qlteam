<template>
    <div>
        <el-row>
            <el-col :span="6" style="height: 80vh" v-for="task in tasks">
                <p>{{task.label}}</p>
                <draggable :group="group.inbox" :list="task.data" @change="change">
                    <transition-group>
                        <li v-for="(i,index) in task.data" style="margin-bottom: 10px" :key="'k'+index">{{i.name}}</li>
                    </transition-group>
                </draggable>

            </el-col>

        </el-row>

        <draggable>
            <task-item></task-item>
        </draggable>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    import TaskItem from "../../components/TaskItem";


    export default {
        name: "Home",
        components: {draggable, TaskItem},
        data() {
            return {
                group: {
                    inbox: {name: "inbox", put: true},
                    todo: {name: "inbox", put: true},
                    nextStep: {name: "nextStep", put: true},
                    later: {name: "later", put: true}
                },
                tasks: [
                    // 收件箱
                    {name: "inbox", data: [{name: 1}, {name: 2}, {name: 3}], label: "收件箱"},
                    // 今天要做
                    {name: "todo", data: [{name: 7}, {name: 9}], label: "今天要做"},
                    // 下一步要做
                    {name: "nextStep", data: [{name: 3}, {name: 4}, {name: 5}], label: "下一步要做"},
                    // 以后再做
                    {name: "later", data: [], label: "以后再做"}
                ]
            }
        },
        methods: {
            change(e) {
                console.log(e)
                //console.log(this.tasks[0].data.length, this.tasks[1].data.length, this.tasks[2].data.length, this.tasks[3].data.length,)
            }
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