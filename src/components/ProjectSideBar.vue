<template>
    <div>

        <el-menu style="height: 100vh"
                 :default-active="'p'+activeItem+1"
                 text-color="#545c64"
                 active-text-color="#ffd04b">
            <div style="display: flex;justify-content: space-between;padding-left: 20px;padding-right: 20px;border-bottom: 1px solid #eee">
                <p>列表</p>
                <div style="display: flex;justify-content: center;align-items: center">
                    <a>
                        <span class="el-icon-menu add" style="cursor: pointer" @click="openAdd"></span>
                    </a>

                </div>

            </div>
            <el-tree :data="views" highlight-current default-expand-all :props="defaultProps"></el-tree>
            <el-tree :data="projectMenus" highlight-current default-expand-all :props="defaultProps"
                     @node-click="clickProject"></el-tree>

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
                views: [{
                    name: '视图',
                    children: [{
                        name: '我的任务'
                    }, {
                        name: '统计视图'
                    }, {
                        name: '日历视图`'
                    },]
                }],
                projectMenus: [{
                    name: '项目',
                    children: [{
                        name: '小东门项目'
                    }, {
                        name: '沃尔夫物联网'
                    }, {
                        name: '世瑞小龙虾`'
                    },]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'name'
                },
                activeItem: "/task",
                projectUrl: "/project/",
                menus: []
            }
        },
        methods: {
            clickProject(project) {
                console.log(project.id);
                let param = {projectId: project.id}


            },
            openAdd() {
                this.$message.success("todo 选择模板以新建项目")
            },
            routeChange(to, from) {
                this.rememberMe()
            },

            rememberMe() {
                this.activeItem = "f" + this.$route.params.id
            },
            loadMenus() {
                this.menus = this.projects
            },
            loadProjects() {
                this.$api.project.list().then(res => {
                    this.projectMenus[0].children = res.data
                    console.log(this.projectMenus[0].children)
                })
            }


        },
        mounted() {
            this.loadProjects()
        }
    }
</script>

<style scoped lang="scss">
    a:hover {
        color: #1D63D7;
    }
</style>