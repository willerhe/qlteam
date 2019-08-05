<template>
    <div>
        <el-card class="box-card"  style="cursor: pointer;height: 225px;overflow: hidden;margin-left: 7px" shadow="hover" >
            <div slot="header">
                <span>用户故事</span>
            </div>
            <div>
                <p>{{item.describe}}</p>
            </div>
        </el-card>


    </div>
</template>

<script>
    export default {
        name: "StoryItem",
        props: {
            item: {
                type: Object
            }
        },
        data() {
            return {
            }
        }
    }
</script>

<style scoped>

</style>