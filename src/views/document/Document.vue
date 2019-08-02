<template>
    <div class="document-manager">
        <el-row style="margin-bottom: 20px">
            <el-col :span="24">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">项目文档</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/">小西门智能安防</a></el-breadcrumb-item>
                    <el-breadcrumb-item>需求文档</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4" style="text-align: center" v-for="o in 6">
                <span class="document el-icon-folder"></span>
                <p style="margin: 0px" align="center">小东门智能安防</p>
            </el-col>

        </el-row>


    </div>
</template>

<script>

    export default {
        name: "Document",
        components:{},
        methods: {

        }
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