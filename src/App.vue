<template>
    <div id="app">
        <status-bar></status-bar>
        <menu-bar></menu-bar>
        <router-view></router-view>
    </div>
</template>

<script>
    import MenuBar from "./components/MenuBar";
    import StatusBar from "./components/StatusBar";


    export default {
        name: 'app',
        components: {MenuBar,StatusBar}
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
