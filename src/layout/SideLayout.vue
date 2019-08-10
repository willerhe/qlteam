<template>
    <div style="display: flex;width: 100vw">
        <menu-bar style="width: 80px"></menu-bar>
        <transition name="el-fade-in" :appear="true" mode="out-in">
            <router-view style="width: 100%"></router-view>
        </transition>
    </div>
</template>

<script>
    import MenuBar from "../components/MenuBar";

    export default {
        name: "SideLayout",
        components: {MenuBar}
    }
</script>

<style scoped>

</style>