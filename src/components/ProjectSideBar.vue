<template>
    <div>
        <el-menu style="height: 100vh"
                 :default-active="activeItem"
                 text-color="#545c64"
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
        name: "ProjectSideBar",
        watch: {
            $route: {
                handler: 'routeChange',
                immediate: true

            }
        },
        data() {
            return {
                activeItem: "/task",
                projects: [],
                menus: []
            }
        },
        methods: {
            routeChange(to, from) {
                this.rememberMe()
            },

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
            },
            mockData() {
                // for (let i = 0;i < )
                //     this.projects.push({id: i, name: "项目" + i})
                // }
                // console.log("this.projects",this.projects)
            }

        },
        mounted() {
            this.loadMenus()
            this.mockData()


            // this.activeIndex = window.localStorage.getItem("activeIndex") || 0


        }
    }
</script>

<style scoped>
</style>