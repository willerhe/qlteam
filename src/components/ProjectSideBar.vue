<template>
    <div>
        <div style="display: flex;justify-content: space-between;padding-left: 20px;padding-right: 20px;border-bottom: 1px solid #ffffff">
            <p>项目</p>
            <div style="display: flex;justify-content: center;align-items: center">
                <a>
                    <span class="el-icon-menu add" style="cursor: pointer" @click="openAdd"></span>
                </a>

            </div>
        </div>
        <el-menu style="height: 100vh"
                 default-active="0"
                 text-color="#545c64"
                 active-text-color="#ffd04b">
            <el-menu-item index="0">
                <span slot="title">全部</span>
            </el-menu-item>
            <el-menu-item :index="m.id" v-for="m,i in projectMenus">
                <span slot="title">{{i+1}}.{{m.name}}</span>
            </el-menu-item>

        </el-menu>
        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
        </el-dialog>
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
                dialogVisible: false,
                views: [{
                    name: '视图',
                    children: [{
                        name: '我的任务',
                        path: '/ql/task/responsible'
                    }, {
                        name: '统计视图',
                        path: '/ql/task/responsible'
                    }, {
                        name: '日历视图`',
                        path: '/ql/task/responsible'
                    },]
                }],
                projectMenus: [{
                    id: '1',
                    name: '小东门项目'
                }, {
                    id: '2',
                    name: '沃尔夫物联网'
                }, {
                    id: '3',
                    name: '世瑞小龙虾'
                },],
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
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {
                    });
            },
            clickView(view) {
                console.log(view)
                if (view.path) {
                    this.$router.push(view.path)
                }

            },
            clickProject(project) {
                console.log(project.id)
                let param = {projectId: project.id}


            },
            openAdd() {
                this.dialogVisible = true
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