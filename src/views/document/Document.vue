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

        <div style="background-color: white;padding: 7px    ;display: inline-flex;flex-direction: row;width: 100%">
            <div style="display: inline-flex;align-items:center;flex-direction: column;margin: 21px" v-for="o in 6"
                 @contextmenu.stop.prevent="$refs.ctxshow.showMenu($event, o)">
                <span class="document el-icon-folder"></span>
                <p style="margin: 0px;font-size: 14px;color:#818181">小东门智能安防</p>
            </div>
        </div>

        <e-vue-contextmenu ref="ctxshow" id="contextStyle" @ctx-show="show" @ctx-hide="hide">
            <div style="padding: 7px">
                <div style="display: flex;">
                    <span class="el-icon-document"></span>
                    <span style="margin-left: 10px">打开</span>
                </div>
                <div style="display: flex;">
                    <span class="el-icon-document"></span>
                    <span style="margin-left: 10px">复制</span>
                </div>
                <div style="display: flex;">
                    <span class="el-icon-document"></span>
                    <span style="margin-left: 10px">删除</span>
                </div>
                <div style="display: flex;">
                    <span class="el-icon-document"></span>
                    <span style="margin-left: 10px">重命名</span>
                </div>
            </div>
        </e-vue-contextmenu>

    </div>
</template>

<script>

    export default {
        name: "Document",
        components: {},
        methods: {

            show(data) {
                console.log('菜单显示了')
            },
            hide(data) {
                console.log('菜单隐藏了')
            },
            handlerSql() {
                // 自定义事件
            }

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