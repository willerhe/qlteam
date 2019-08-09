<template>
    <div style="display: flex;width: 100vw">
        <menu-bar style="width: 80px"></menu-bar>
        <router-view style="width: 100%"></router-view>
    </div>
</template>

<script>
    import StatusBar from "../components/StatusBar";
    import MenuBar from "../components/MenuBar";

    export default {
        name: "SideLayout",
        components: {StatusBar, MenuBar}
    }
</script>

<style scoped>

</style>