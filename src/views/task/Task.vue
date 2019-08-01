<template>
    <div>
        <el-row>
            <el-col :span="6" style="height: 80vh">
                <p>收件箱</p>
                <draggable @update="dragEnd">
                    <li v-for="i in inbox" style="margin-bottom: 10px">{{i.name}}</li>
                </draggable>

            </el-col>
            <el-col :span="6" style="height: 80vh">
                <p>今天要做</p>
                <draggable @update="dragEnd">
                    <li v-for="i in nextStep" style="margin-bottom: 10px">{{i.name}}</li>
                </draggable>

            </el-col>
            <el-col :span="6" style="height: 80vh">
                <p>下一步要做</p>
            </el-col>
            <el-col :span="6" style="height: 80vh">
                <p>以后再做</p>
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
                inbox: [{name: 1}, {name: 2}, {name: 3}],
                nextStep: [{name: 3}, {name: 4}, {name: 5}]
            }
        },
        methods: {
            dragEnd() {
                console.log("拖动结束")
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