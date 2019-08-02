import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

import Task from "./views/task/Task";
import Login from "./views/login/Login";
import Document from "./views/document/Document";
import Setting from "./views/setting/Setting";
import Shared from "./views/shared/Shared";
import Project from "./views/project/Project";
import Calendar from "./views/task/Calendar"
import Story from "./views/story/Story";


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
    },
    {

        path: '/calendar',
        name: "calendar",
        title: "日程",
        icon: "el-icon-date",
        component: Calendar
    },
    {

        path: '/story',
        name: "story",
        title: "故事",
        icon: "el-icon-date",
        component: Story
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
        path: '/project',
        name: "project",
        title: "项目",
        icon: "el-icon-files",
        component: Project
    },
    {
        path: '/shared',
        name: "shared",
        title: "分享",
        icon: "el-icon-share",
        component: Shared
    },
    {
        path: '/setting',
        name: "setting",
        title: "设置",
        icon: "el-icon-setting",
        component: Setting
    },


]


export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({y: 0}),
    routes: Routers
})
