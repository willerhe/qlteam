<template>
    <div>
        <el-row>
            <el-col :span="4" v-for="it in items" style="padding: 7px">
                <draggable>
                    <story-item :item="it"></story-item>
                </draggable>

            </el-col>
        </el-row>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    import StoryItem from "../../components/StoryItem";
    import Base from "../../components/Base";
    import Pager from "../../components/Pager";

    export default {
        name: "Story",
        extends: Pager,
        components: {draggable, StoryItem},
        mounted() {
            this.$api.story.list().then(res => {
                this.items = res.data
                console.log(this.items)
            })

            console.log("pager", this.pager)
        }
    }
</script>

<style scoped>

</style>