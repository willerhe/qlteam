import router from './router'

//注册两个全局前置守卫
router.beforeEach((to, from, next) => { //全局前置守卫按照创建顺序调用
    console.log('%c 前置钩子', 'color:blue')
    next()
})

router.beforeEach((to, from, next) => {  //5秒后，上一个前置守卫颁发了next()通行证
    console.log('%c 前置钩子2', 'color:blue')
    console.log(to, from)
    next()
})
//所以这里至少花了8秒去执行这两个前置守卫
