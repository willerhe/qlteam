<template>
    <div>
        <div class="tesk-item">
            <el-row>
                <el-col :span="20">
                    小东门物联网系统
                </el-col>
                <el-col  :span="2">
                    master
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">2019-07-30</el-col>
                <el-col :span="12"></el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TaskItem"
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