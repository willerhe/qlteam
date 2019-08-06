<template>
    <div id="app">
        <side-layout></side-layout>
    </div>
</template>

<script>
    import MenuBar from "./components/MenuBar";
    import StatusBar from "./components/StatusBar";
    import SideLayout from "./layout/SideLayout";


    export default {
        name: 'app',
        components: {MenuBar, StatusBar, SideLayout}
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
    body{
        margin: 0px;
        padding: 0px;
        background: #EEEEEE;
    }
</style>
