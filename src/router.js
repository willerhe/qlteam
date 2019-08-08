import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

import Task from "./views/task/Task";
import Login from "./views/login/Login";
import Document from "./views/document/Document";
import Setting from "./views/setting/Setting";
import Team from "./views/team/Team";
import Project from "./views/project/Project";
import Calendar from "./views/task/Calendar"
import Story from "./views/story/Story";
import ProjectStory from "./views/project/ProjectStory";


export const Routers = [
    {
        path: '/',
        component: Task,
        hidden: true,
    },
    {

        path: '/task',
        name: "task",
        title: "任务",
        icon: "el-icon-menu",
        component: Task
    }, {

        path: '/story',
        name: "story",
        title: "故事",
        icon: "el-icon-date",
        component: Story
    },

    {
        path: '/project',
        name: "project",
        title: "项目",
        icon: "el-icon-files",
        component: Project,
    },


    {
        path: '/project/:id',
        name: "project.story",
        title: "项目",
        icon: "el-icon-files",
        component: Project,
        hidden:true
    },
    {

        path: '/calendar',
        name: "calendar",
        title: "日程",
        icon: "el-icon-date",
        component: Calendar
    },

    {
        path: '/login',
        name: "login",
        title: "登录",
        component: Login,

        hidden: true
    },
    {
        path: '/document',
        name: "document",
        title: "文档",
        icon: "el-icon-folder",
        component: Document
    },
    {
        path: '/team',
        name: "team",
        title: "团队",
        icon: "el-icon-wind-power",
        component: Team
    },
    {
        path: '/setting',
        name: "setting",
        title: "设置",
        icon: "el-icon-setting",
        component: Setting,
        //todo 没想好 暂时隐藏
        hidden:true,
    },


]


export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({y: 0}),
    routes: Routers
})
