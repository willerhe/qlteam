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
    import AudoLoadPager from "../../components/AutoLoadPager";

    export default {
        name: "Story",
        extends: AudoLoadPager,

        components: {draggable, StoryItem},
        data() {
            return {
                inject: ['context'],
                context: this,
                api: this.$api.story
            }
        },
        methods: {},
        mounted() {
        }
    }
</script>

<style scoped>

</style>