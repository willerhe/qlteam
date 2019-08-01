<template>
    <div>
        <el-row :gutter="20" >
            <el-col :span="6">
                <div class="grid-content bg-purple">logo</div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">branch switch</div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple"> global tool area</div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "StatusBar"
    }
</script>

<style scoped>

</style>