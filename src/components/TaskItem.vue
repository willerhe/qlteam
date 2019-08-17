<template>
    <div>
        <div class="task-item">
            <div class="task-item-1">
                <span>{{item.name}}</span>

                <el-dropdown trigger="click" @command="clickItem">
                    <el-tag type="success" effect="plain" size="mini" plain @click.stop="changeStatus"
                            v-if="item.status === 'finished'">
                            <span class="el-icon-circle-check"
                                  style="font-weight: bolder;margin-right: 3px;color: #67C23A"></span>
                        <span>已完成</span>
                    </el-tag>
                    <el-tag type="warning" effect="plain" size="mini" plain @click.stop="changeStatus"
                            v-else-if="item.status === 'ongoing'">
                            <span class="el-icon-video-pause"
                                  style="font-weight: bolder;margin-right: 7px;color: #E6A23C"></span>
                        <span>进行中</span>
                    </el-tag>
                    <el-tag type="danger" effect="plain" size="mini" plain @click.stop="changeStatus"
                            v-else="item.status === 'preparing'">
                            <span class="el-icon-remove-outline"
                                  style="font-weight: bolder;margin-right: 7px;color: #F56C6C"></span>
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
            <span class="task-item-2">

                <s style="color: #ccc" v-if="item.status === 'finished'">{{item.describe}}</s>
                <span v-else>{{item.describe}}</span>
            </span>
            <div class="task-item-4">
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
        height: 80px;
        border-radius: 1px;
        border: 1px solid #ccc;
        padding: 7px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: white;
        margin-bottom: 3px;
    }

    .task-item-1 {
        display: flex;
        flex-direction: row;
        justify-content: space-between
    }

    .task-item-2 {
        font-size: 14px;
    }

    .task-item-3 {
        font-size: 12px;
    }

    .task-item-4 {
        display: flex;
        flex-direction: row-reverse;
    }
</style>