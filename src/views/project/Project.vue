<template>
    <el-container>
        <el-aside width="200px">
            <project-side-bar></project-side-bar>
        </el-aside>
        <el-main style="background-color: white;margin-left: 3px">
            <el-scrollbar>
                <router-view></router-view>
            </el-scrollbar>
        </el-main>
    </el-container>
</template>

<script>
    import ProjectSideBar from "../../components/ProjectSideBar";

    export default {
        name: "Project",
        components: {ProjectSideBar}
    }
</script>

<style scoped>

</style>