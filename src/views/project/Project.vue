<template>
    <div style="display: flex">
        <project-side-bar style="width: 260px;height: 100vh;margin-left: -11px;margin-right: 0px"></project-side-bar>
        <div style="background-color: white;padding: 7px;width: 100%">
            <el-tabs v-model="activeTab">
                <el-tab-pane label="任务视图" name="task">
                    <project-task></project-task>
                </el-tab-pane>
                <el-tab-pane label="故事视图" name="story">
                    <project-story></project-story>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    import ProjectSideBar from "../../components/ProjectSideBar";
    import ProjectTask from "./ProjectTask";
    import ProjectStory from "./ProjectStory";


    export default {
        name: "Project",
        components: {ProjectSideBar, ProjectTask, ProjectStory},
        data() {
            return {
                activeTab: "task"
            }
        }
    }
</script>

<style scoped>


</style>