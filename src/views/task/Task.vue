<template>
    <div>
        <el-row>
            <el-col :span="6" style="height: 80vh">
                收件箱
            </el-col>
            <el-col :span="6" style="height: 80vh">
                今天要做
            </el-col>
            <el-col :span="6" style="height: 80vh">
                下一步要做
            </el-col>
            <el-col :span="6" style="height: 80vh">
                以后再做
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
        components: {draggable, TaskItem}

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