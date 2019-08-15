<template>
    <div>
        <div class="task-item">
            <div class="task-item-1">
                <span>{{item.name}}</span>
                <el-tag type="success" effect="plain" size="mini" plain>
                    <!--                    {{item.status}}-->
                    待完善{{item.id}}
                </el-tag>
            </div>
            <span class="task-item-2">{{item.describe}}</span>
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