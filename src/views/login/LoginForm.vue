<template>
    <div class="login-form">
        <div style="width: 400px" class="inner-form">
            <el-input
                    placeholder="账号"
                    v-model="user.account"
                    style="margin-bottom: 14px"
                    prefix-icon="el-icon-date">
            </el-input>
            <el-input
                    placeholder="密码"
                    show-password
                    v-model="user.password"
                    style="margin-bottom: 14px"
                    prefix-icon="el-icon-date">
            </el-input>

            <el-button type="primary" @click="login" class="full">登录</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginForm",
        data(){
            return{
                user:{}
            }
        },
        methods:{
            login(){
                this.$router.push("/task")
            }
        }
    }
</script>

<style scoped lang="scss">
    .login-form{
        min-width: 600px;
        flex-grow: 3;
        border: solid 1px #cccc;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        border-radius: 3px;

    }
    .full{
        width: 100%;
    }
    .inner-form{

    }
</style>