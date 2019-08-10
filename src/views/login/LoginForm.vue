<template>
    <div class="login-form">
        <el-button type="primary" @click="login">登录</el-button>
    </div>
</template>

<script>
    export default {
        name: "LoginForm",
        methods:{
            login(){
                this.$router.push("/task")
            }
        }
    }
</script>

<style scoped>
    .login-form{
        min-width: 400px;
        flex-grow: 3;
        border: solid 1px red;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
    }
</style>