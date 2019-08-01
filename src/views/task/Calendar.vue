<template>
    <div>
        <full-calendar style="max-width: none;max-height: none" :events="fcEvents" locale="fr"
                       @eventClick="eventClick" @dayClick="dayClick" @changeMonth="changeMonth">
        </full-calendar>


        <el-dialog
                title="添加事件"
                :visible.sync="addDialogVisible"
                width="30%"
                :before-close="handleClose">
            <span>添加一个新的事件</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="addDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addDialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>


        <el-dialog
                title="查看事件"
                :visible.sync="updateDialogVisible"
                width="30%"
                :before-close="handleClose">
            <span>查看||修改事件</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="updateDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="updateDialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>


    </div>
</template>

<script>
    import FullCalendar from 'vue-fullcalendar'

    export default {
        name: "Calendar",
        components: {FullCalendar},
        data() {
            return {
                addDialogVisible: false,
                updateDialogVisible: false,
                fcEvents: [
                    {
                        id: "123",
                        title: '完成第一个原型设计',
                        start: '2019-08-2',
                        end: '2019-08-6',
                        cssClass: 'danger',
                    }
                ]
            }
        },
        methods: {
            'changeMonth'(start, end, current) {
                console.log('changeMonth', start, end, current)
            },
            'eventClick': function (a) {
                console.log("事件", a)
                this.updateDialogVisible = true
            },
            'dayClick': function (d) {
                // 模拟双击事件
                this.addDialogVisible = true
                console.log("添加事件,开始日期", d)


            },
            handleClose(done) {
                done()
            }
        },
        mounted() {
            let _this = this

        }

    }
</script>

<style scoped>
    .danger {
        color: red;
    }
</style>