import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)

import Home from "./views/dashboard/Home";
import Login from "./views/login/Login";


const constantRouterMap = [
    {
        path: '/home',
        name: "home",
        component: Home
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
