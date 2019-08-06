<template>
    <div>
        <div class="task-item">
            <div class="task-item-1">
                <span>{{item.name}}</span>
                <span>{{item.status}}</span>
            </div>
            <span class="task-item-2">{{item.describe}}</span>
            <div class="task-item-4">
                <span class="task-item-3">{{item.createdAt | normalTime}}</span>
            </div>

            <!--                <el-col :span="21" style="padding: 3px">-->
            <!--                    {{item.name}}-->
            <!--                </el-col>-->
            <!--                <el-col :span="2" style="padding: 3px">-->
            <!--                    {{item.status}}-->
            <!--                </el-col>-->
            <!--                <el-col :span="24" style="padding: 3px">{{item.describe}}</el-col>-->
            <!--                <el-col :span="24" align="right" style="padding: 3px">2019-07-30</el-col>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "TaskItem",
        props: {
            item: {
                type: Object,
                default: function () {
                    return {}
                }
            }

        }
    }
</script>

<style scoped>
    .task-item {
        height: 80px;
        border-radius: 1px;
        border: 1px solid #ccc;
        padding: 7px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: white;
        margin-bottom: 3px;
    }

    .task-item-1 {
        display: flex;
        flex-direction: row;
        justify-content: space-between
    }

    .task-item-2 {
        font-size:14px;
    }
    .task-item-3{
        font-size: 12px;
    }
    .task-item-4{
        display: flex;
        flex-direction: row-reverse;
    }
</style>