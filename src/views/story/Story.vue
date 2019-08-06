<template>
    <div>
        <el-row>
            <div @click="formVisible = true">
                <el-col :span="4">
                    <el-card class="box-card" shadow="hover"
                             style="background: #f4f4f4;padding: 7px;height: 208px;border: 1px #939393 dashed;cursor: pointer"
                             align="center">
                        <span class="el-icon-plus" style="font-size: 160px;color: #c4c4c4"></span>
                    </el-card>
                </el-col>
            </div>

            <div v-for="it in items" @click="scanItem(it)">
                <el-col :span="4">
                    <draggable  @start="drag=true">
                        <story-item :item="it"></story-item>
                    </draggable>

                </el-col>
            </div>
        </el-row>

        <el-dialog
                :title="formItem.id?'更改':'添加'"
                :visible.sync="formVisible"
                width="30%"
                center>
            <el-input
                    type="textarea"
                    :autosize="{ minRows: 6, maxRows: 10}"
                    placeholder="请输入用户故事的内容"
                    v-model="formItem.describe">
            </el-input>

            <span style="color: #818181">Note : 添加用户故事,经常的描述 : 作为< 角色 > , 可以 < 活动 > ,以便< 用户价值 ></span>
            <span slot="footer" class="dialog-footer">
            <el-button @click="formVisible = false">取 消</el-button>
            <el-button type="primary" @click="formVisible = false">确 定</el-button>
          </span>
        </el-dialog>

    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    import StoryItem from "../../components/StoryItem";
    import AudoLoadPager from "../../components/AutoLoadPager";

    export default {
        name: "Story",
        extends: AudoLoadPager,
        components: {draggable, StoryItem},
        data() {
            return {
                inject: ['context'],
                context: this,
                api: this.$api.story,
                // 对话框可见
                formVisible: false,
                formItem: {}
            }
        },
        methods: {
            scanItem(item) {
                this.formItem = item
                this.formVisible = true

            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>