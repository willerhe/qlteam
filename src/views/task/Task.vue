<template>
    <div>
        <transition name="el-zoom-in-center">
            <div class="task">
                <project-side-bar
                        style="width: 240px;margin-left: -11px;margin-right: 0px"></project-side-bar>
                <div style="width: 100%;">
                    <div style="display: flex;justify-content: center;background:white;border-bottom: 1px solid #eee">
                        <el-menu :default-active="defaultActive" class="el-menu-demo" mode="horizontal"
                                 style="height: 55px;display: flex;justify-content: center">
                            <router-link :to="m.path" v-for="(m,i) in tabMenus" :key="i" style="text-decoration: none">
                                <el-menu-item :index="m.path">{{m.name}}</el-menu-item>
                            </router-link>

                        </el-menu>
                    </div>
                    <!--  盒子区域              //-->
                    <router-view></router-view>


                </div>


            </div>
        </transition>


    </div>
</template>

<script>
    import ProjectSideBar from "../../components/ProjectSideBar";


    export default {
        name: "Task",
        components: {ProjectSideBar},
        watch: {
            $route: {
                handler: 'routeChange',
                immediate: true

            }
        },
        data() {
            return {
                defaultActive: '',
                tabMenus: [
                    {
                        path: '/ql/task/responsible',
                        name: '我负责的'
                    },
                    {
                        path: '/ql/task/distribution',
                        name: '我分配的'
                    },
                    {
                        path: '/ql/task/involved',
                        name: '我参与的'
                    },
                    {
                        path: '/ql/task/establish',
                        name: '我创建的'
                    },
                ]
            }
        },
        methods: {
            routeChange() {
                this.defaultActive = this.$route.fullPath
                console.log('this.defaultActive', this.defaultActive)
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

    .add-item {
        display: flex;
        justify-content: center;
        height: 40px;
        align-items: center;
        cursor: pointer
    }

    .add-item-area {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        padding: 7px;
    }

    .add-item-1 {
        font-size: larger;
        background: white;
    }

    .add-item-2 {
        margin-left: 7px;
        color: #818181;
        font-size: 12px
    }

    .task {
        display: flex;
        justify-content: space-between;
    }

    /*todo 怎么把width 设置成25%  盒子还能够在一行展示*/
    .task-1 {
        display: inline-flex;
        flex-direction: column;
        justify-content: flex-start;
        background: #fff;
        border-radius: 3px;
    }

    .task-content {
        margin: 3px;
        background: #EEEEEE;
        display: flex;
        flex-direction: column
    }

    .parent-task {
        display: block;
        overflow-wrap: unset;

    }


</style>