<template>
    <div>
        <div class="tesk-item">
            <el-row>
                <el-col :span="21" style="padding: 3px">
                    {{item.name}}
                </el-col>
                <el-col :span="2" style="padding: 3px">
                    {{item.status}}
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24" style="padding: 3px">{{item.describe}}</el-col>
                <el-col :span="24" align="right" style="padding: 3px">2019-07-30</el-col>
            </el-row>
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
    .tesk-item {
        width: 100%;
        height: 80px;
        border-radius: 1px;
        border: 1px solid #ccc;
        padding: 3px;
        cursor: pointer;
    }
</style>