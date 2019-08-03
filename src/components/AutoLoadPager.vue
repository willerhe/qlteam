<template>
    <!-- 这是一个继承了Pager的界面  包含分页参数 并且能够根据注入的api自动执行list分页方法-->
</template>

<script>
    import Pager from "./Pager";

    export default {
        name: "AutoLoadPager",
        extends: Pager,
        provide: function () {
            return {
                api: Object
            }
        },
        data() {
            return {}
        },
        mounted() {
            this.api.list().then(res => {
                this.items = res.data
                console.log("查询结果", this.items)
            })


        }
    }
</script>

<style scoped>

</style>