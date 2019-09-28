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
            <el-tree :data="views" highlight-current default-expand-all @node-click="clickView"
                     :props="defaultProps"></el-tree>
            <el-tree :data="projectMenus" highlight-current default-expand-all :props="defaultProps"
                     @node-click="clickProject"></el-tree>

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
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
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