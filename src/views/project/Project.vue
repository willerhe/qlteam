<template>
    <div style="display: flex">
        <project-side-bar style="width: 200px;height: 100vh"></project-side-bar>
        <div style="background-color: white;margin-left: 8px;padding: 7px;width: 100%">
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