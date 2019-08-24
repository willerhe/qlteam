<template>
    <div class="task-item">
        <div class="task-item-1">
            <div style="display: flex;align-items: center;justify-content: center">
                <span style="font-size: smaller">{{item.name}}</span>
            </div>

            <el-dropdown trigger="click" @command="clickItem">
                <el-tag type="success" effect="dark" size="mini" plain @click.stop="changeStatus"
                        v-if="item.status === 'finished'">
                    <!--                            <span class="el-icon-circle-check"-->
                    <!--                                  style="font-weight: bolder;margin-right: 3px;color: white"></span>-->
                    <span>已完成</span>
                </el-tag>
                <el-tag type="warning" effect="dark" size="mini" plain @click.stop="changeStatus"
                        v-else-if="item.status === 'ongoing'">
                    <!--                            <span class="el-icon-video-pause"-->
                    <!--                                  style="font-weight: bolder;margin-right: 7px;color: white"></span>-->
                    <span>进行中</span>
                </el-tag>
                <el-tag type="danger" effect="dark" size="mini" plain @click.stop="changeStatus"
                        v-else="item.status === 'preparing'">
                    <!--                            <span class="el-icon-remove-outline"-->
                    <!--                                  style="font-weight: bolder;margin-right: 7px;color: white"></span>-->
                    <span>未开始</span>
                </el-tag>

                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="preparing">
                            <span class="el-icon-remove-outline"
                                  style="font-weight: bolder;margin-right: 7px;color: #F56C6C"></span>
                        <span>未开始</span>
                    </el-dropdown-item>
                    <el-dropdown-item command="ongoing">
                            <span class="el-icon-video-pause"
                                  style="font-weight: bolder;margin-right: 7px;color: #E6A23C"></span>
                        <span>进行中</span>
                    </el-dropdown-item>
                    <el-dropdown-item command="finished">
                            <span class="el-icon-circle-check"
                                  style="font-weight: bolder;margin-right: 7px;color: #67C23A"></span>
                        <span>已完成</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="task-item-2">
            <span style="color: #ccc" v-if="item.status === 'finished'">{{item.describe}}</span>
            <span v-else style="color: #3c3c3c">{{item.describe}}</span>
        </div>
        <div class="task-item-4">

            <!--                <el-dropdown trigger="click">-->
            <div class="avatar">
                <span style="color: white;font-size: smaller">作伟</span>
            </div>
            <!--                    <el-dropdown-menu slot="dropdown">-->
            <!--                        <el-dropdown-item >贺作伟</el-dropdown-item>-->
            <!--                        <el-dropdown-item >张三</el-dropdown-item>-->
            <!--                        <el-dropdown-item >李四</el-dropdown-item>-->
            <!--                        <el-dropdown-item >王武</el-dropdown-item>-->
            <!--                        <el-dropdown-item >诸葛儿麻</el-dropdown-item>-->
            <!--                    </el-dropdown-menu>-->
            <!--                </el-dropdown>-->


            <div style="display: flex;justify-content: center;align-self: flex-end;">
                <span class="task-item-3">{{item.createdAt | normalTime}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TaskItem",
        props: {
            item: {
                type: Object,
                default: function () {
                    return {}
                }
            }

        },
        methods: {
            selectLeader(task) {
                console.log(task)
            },
            changeStatus() {
            },
            clickItem(status) {
                console.log("点击了菜单项", status)
                this.item.status = status
                this.$api.task.update(this.item).then(() => {
                    this.$emit("init")
                })
            }
        }
    }
</script>

<style scoped>
    .task-item {
        border-radius: 1px;
        border: 1px solid #ccc;
        padding: 7px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: white;
        margin-bottom: 3px;
        flex: 1;
    }

    .task-item-1 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;


    }

    .task-item-2 {
        font-size: 14px;
        flex: 1;
        overflow-wrap: break-word;
        flex-wrap: wrap;
        margin-top: 7px;


    }


    .task-item-3 {
        font-size: 12px;
    }

    .task-item-4 {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
    }

    .avatar {
        width: 30px;
        height: 30px;
        border-radius: 50px;
        /*//#66CCFF*/
        background: #9966FF;
        font-size: 10px;
        font-weight: bolder;
        align-items: center;
        justify-content: center;
        align-self: center;
        display: flex;
        padding: 1px;
    }

</style>