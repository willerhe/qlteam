<template>
    <div>
        <el-menu style="height: 100vh"
                 default-active="1"
                 class="el-menu-vertical-demo"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b">
            <router-link to="/task">
                <el-menu-item index="1">
                    <i class="el-icon-menu"></i>
                    <span slot="title">任务</span>
                </el-menu-item>
            </router-link>

            <router-link to="/project">
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">项目</span>
                </el-menu-item>
            </router-link>


            <router-link to="/document">
                <el-menu-item index="3">
                    <i class="el-icon-document"></i>
                    <span slot="title">文档</span>
                </el-menu-item>
            </router-link>

            <router-link to="shared">
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">分享</span>
                </el-menu-item>
            </router-link>

            <router-link to="/setting">
                <el-menu-item index="5">
                    <i class="el-icon-setting"></i>
                    <span slot="title">设置</span>
                </el-menu-item>
            </router-link>
        </el-menu>
    </div>


</template>

<script>
    export default {
        name: "MenuBar",
    }
</script>

<style scoped>
</style>