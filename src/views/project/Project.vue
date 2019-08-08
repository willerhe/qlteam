<template>
    <el-container>
        <el-aside width="200px">
            <project-side-bar></project-side-bar>
        </el-aside>
        <el-main style="background-color: white;margin-left: 3px;padding: 7px">
            <el-tabs v-model="activeTab">
                <el-tab-pane label="任务视图" name="task">
                    <project-task></project-task>
                </el-tab-pane>
                <el-tab-pane label="故事视图" name="story">
                    <project-story></project-story>
                </el-tab-pane>
            </el-tabs>
        </el-main>
    </el-container>
</template>

<script>
    import ProjectSideBar from "../../components/ProjectSideBar";
    import ProjectTask from "./ProjectTask";
    import ProjectStory from "./ProjectStory";


    export default {
        name: "Project",
        components: {ProjectSideBar, ProjectTask, ProjectStory},
        data(){
            return{
                activeTab:"task"
            }
        }
    }
</script>

<style scoped>

</style>