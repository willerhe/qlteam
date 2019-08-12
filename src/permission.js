import router from './router'
import store from "./store/store";

const whiteList = [
    "/login"
]

//注册两个全局前置守卫
router.beforeEach((to, from, next) => {
    //跳过白名单
    if (whiteList.indexOf(to)) {
        next()
    }
    // 拦截权限
    if (window.localStorage.getItem("authorization") !== null) {
        console.log("有权限")
        next()
    } else {
        console.log("没有权限")
        router.push("/sys/login")
    }

})


