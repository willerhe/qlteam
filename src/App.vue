<template>
    <div id="app">
        <!--  todo 放在router-view中      -->
            <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {},
        mounted() {
            // todo 模拟权限验证   必须登录才能操作
            this.$router.push("/login")
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    body {
        margin: 0px;
        padding: 0px;
        background: #EEEEEE;
    }
</style>
