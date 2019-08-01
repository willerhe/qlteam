import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)

import Task from "./views/task/Task";
import Login from "./views/login/Login";


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

]


export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({y: 0}),
    routes: constantRouterMap
})
