<template>
    <div>

        <el-menu style="height: 100vh"
                 :default-active="'p'+activeItem+1"
                 text-color="#545c64"
                 active-text-color="#ffd04b">
            <div style="display: flex;justify-content: space-between;padding-left: 20px;padding-right: 20px;border-bottom: 1px solid #eee">
                <p>项目列表</p>
                <div style="display: flex;justify-content: center;align-items: center">
                    <a>
                        <span class="el-icon-menu add" style="cursor: pointer"></span>
                    </a>

                </div>

            </div>
            <router-link :to="projectUrl+item.id" style="text-decoration: none" v-for="(item,i) in menus"
                         :key="item.id">
                <el-menu-item :index="'f'+item.id">
                    <span slot="title">{{item.name}}</span>
                </el-menu-item>
            </router-link>

        </el-menu>
    </div>


</template>

<script>


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
                projectUrl: "/project/",
                projects: [{id: 1, name: "项目1"}, {id: 2, name: "项目2"}],
                menus: []
            }
        },
        methods: {
            routeChange(to, from) {
                this.rememberMe()
            },

            rememberMe() {
                this.activeItem = "f" + this.$route.params.id
            },
            loadMenus() {
                this.menus = this.projects
            },


        },
        mounted() {
            this.loadMenus()


        }
    }
</script>

<style scoped lang="scss">
    a:hover{
        color: #1D63D7;
    }
</style>