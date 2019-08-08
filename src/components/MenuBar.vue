<template>
    <div>
        <el-menu style="height: 100vh"
                 :default-active="activeItem"
                 :collapse="true"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b">
            <router-link :to="item.path" style="text-decoration: none" v-for="(item,i) in menus" :key="item.path">
                <el-menu-item :index="item.path">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.title}}</span>
                </el-menu-item>
            </router-link>

        </el-menu>
    </div>


</template>

<script>
    import {Routers} from '../router'

    export default {
        name: "MenuBar",
        watch: {
            $route: {
                handler:'routeChange',
                immediate:true

            }
        },
        data() {
            return {
                activeItem: "/task",
                menus: []
            }
        },
        methods: {
            routeChange(to,from){
                this.rememberMe()
            },

            // todo  当页面有自路由的时候怎么记住  http://localhost:8080/#/project/1
            rememberMe() {
                this.activeItem = this.$route.fullPath
            },
            loadMenus() {
                for (let i = 0; i < Routers.length; i++) {
                    let r = Routers[i]
                    if (!r.hidden) {
                        this.menus.push(r)
                    }
                }

                // 找到activeIndex
                console.log("url changed")
            }

        },
        mounted() {
            this.loadMenus()


            // this.activeIndex = window.localStorage.getItem("activeIndex") || 0


        }
    }
</script>

<style scoped>
</style>