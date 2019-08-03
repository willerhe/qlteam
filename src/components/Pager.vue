<template>

</template>

<script>
    import Base from "./Base";

    export default {
        name: "Pager",
        extends: Base,
        data() {
            return {
                pager: {
                    p: 1,
                    ps: 10,
                    total: 100
                }
            }
        }
    }
</script>

<style scoped>

</style>