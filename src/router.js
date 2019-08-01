import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)

import Task from "./views/task/Task";
import Login from "./views/login/Login";
import Document from "./views/document/Document";
import Setting from "./views/setting/Setting";
import Shared from "./views/shared/Shared";
import Project from "./views/project/Project";


const constantRouterMap = [
    {
        path:'/',
        component:Task
    },
    {
        path: '/task',
        name: "task",
        component: Task
    },
    {
        path: '/login',
        name: "login",
        component: Login
    },
    {
        path: '/document',
        name: "document",
        component: Document
    },
    {
        path: '/project',
        name: "project",
        component: Project
    },
    {
        path: '/setting',
        name: "setting",
        component: Setting
    },
    {
        path: '/shared',
        name: "shared",
        component: Shared
    },
    {
        path: '/setting',
        name: "setting",
        component: Setting
    },

]


export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({y: 0}),
    routes: constantRouterMap
})
