<template>
    <div class="document-manager">
        <el-row style="margin-bottom: 20px">
            <el-col :span="24">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4" style="text-align: center">
                <span class="document el-icon-folder"></span>
                <p style="margin: 0px" align="center">小东门智能安防</p>
            </el-col>
            <el-col :span="4">
                <span class="document el-icon-folder"></span>
            </el-col>
            <el-col :span="4">
                <span class="document el-icon-folder"></span>
            </el-col>
            <el-col :span="4">
                <span class="document el-icon-folder"></span>
            </el-col>
            <el-col :span="4">
                <span class="document el-icon-document"></span>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Document"
    }
</script>

<style scoped>
    .document-manager {
        background: #ccc;
        padding: 5px;
    }

    .document {
        font-size: 50px;
    }
</style>