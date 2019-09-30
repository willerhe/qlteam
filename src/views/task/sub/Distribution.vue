<template>
    <div>
        <div class="pd-7">
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        prop="name"
                        label="编号">
                </el-table-column>
                <el-table-column
                        prop="status"
                        label="状态">
                </el-table-column>
                <el-table-column
                        prop="describe"
                        label="内容">
                </el-table-column>
                <el-table-column
                        prop="leader.nickName"
                        label="负责人">
                </el-table-column>
                <el-table-column
                        prop="deadLine"
                        label="截止时间">
                </el-table-column>
                <el-table-column
                        prop="projectId"
                        label="所属项目">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Distribution",
        data() {
            return {
                tableData: []
            }
        },
        mounted() {
            this.$api.task.distribution().then(res => {
                console.log(('我分配的项目'), res.data)
                this.tableData = res.data
            })
        }
    }
</script>

<style scoped>

</style>