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
    if (store.state.user.id) {
        next()
    } else {
        router.push("/login")
    }

})


