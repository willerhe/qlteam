<template>
    <div>
        <el-container>
            <el-header>
                <status-bar></status-bar>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <menu-bar></menu-bar>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>


    </div>
</template>

<script>
    import StatusBar from "../components/StatusBar";
    import MenuBar from "../components/MenuBar";

    export default {
        name: "SideLayout",
        components: {StatusBar, MenuBar}
    }
</script>

<style scoped>

</style>