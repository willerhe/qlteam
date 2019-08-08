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

        <div style="background-color: white;padding: 7px;height: 90vh;;display: inline-flex;flex-direction: row;width: 100%">
            <div style="display: flex;align-items:center;flex-direction: column;margin: 21px"  v-for="o in 6">
                <span class="document el-icon-folder"></span>
                <p  style="margin: 0px;font-size: 14px;color:#818181">小东门智能安防</p>
            </div>
        </div>

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
        padding: 5px;

    }

    .document {
        font-size: 50px;
    }
</style>