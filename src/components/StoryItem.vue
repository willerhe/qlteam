<template>
    <div>


        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>用户故事</span>
            </div>
            <div>
                <p>{{item.content}}</p>
            </div>
        </el-card>


    </div>
</template>

<script>
    export default {
        name: "StoryItem",
        data() {
            return {
                item: {content: "作为一名网站管理员，我要统计每天有多少人访问了我的网站，以便我的赞助商了解我的网站会给他们带来什么收益。"}
            }
        }
    }
</script>

<style scoped>

</style>