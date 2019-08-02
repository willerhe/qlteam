<template>
    <div>
        <h1>故事卡</h1>
        <el-row>
            <el-col :span="4" v-for="i in 4">
                <draggable>
                    <el-card class="box-card">
                        <div v-for="o in 4" :key="o" class="text item">
                            {{'任務 ' + o }}
                        </div>
                    </el-card>
                </draggable>

            </el-col>
        </el-row>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'

    export default {
        name: "Story",
        components: {draggable}
    }
</script>

<style scoped>

</style>