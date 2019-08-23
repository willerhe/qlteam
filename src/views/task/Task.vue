<template>
    <div>
        <transition name="el-zoom-in-center">
            <div class="task">
                <project-side-bar
                        style="width: 260px;margin-left: -11px;margin-right: 0px"></project-side-bar>
                <div style="width: 100%;">
                    <div style="display: flex;justify-content: center;background:white;border-bottom: 1px solid #eee">
                        <el-menu default-active="1" class="el-menu-demo" mode="horizontal" style="height: 55px">
                            <el-menu-item index="1">我负责的</el-menu-item>
                            <el-menu-item index="3">我分配的</el-menu-item>
                            <el-menu-item index="4">我参与的</el-menu-item>
                            <el-menu-item index="5">我创建的</el-menu-item>
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
        data() {
            return {}
        },
        methods: {},
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