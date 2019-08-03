<template>
    <div>
        <el-row>
            <el-col :span="4" v-for="i in 4" style="padding: 7px">
                <draggable>
                    <story-item></story-item>
                </draggable>

            </el-col>
        </el-row>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    import StoryItem from "../../components/StoryItem";

    export default {
        name: "Story",
        components: {draggable, StoryItem},
        mounted() {
            this.$api.story.list().then(res => {

            })
        }
    }
</script>

<style scoped>

</style>