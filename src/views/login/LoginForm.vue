<template>
    <div class="login-form">
        <div style="width: 400px" class="inner-form">
            <h2>登录</h2>
            <el-input
                    placeholder="账号"
                    v-model="user.account"
                    style="margin-bottom: 14px"
                    prefix-icon="el-icon-user">
            </el-input>
            <el-input
                    placeholder="密码"
                    show-password
                    v-model="user.password"
                    style="margin-bottom: 14px"
                    prefix-icon="el-icon-lock">
            </el-input>
            <el-button type="primary" @click="login" class="full">登录</el-button>

            <div style="display: flex;justify-content: space-between;padding: 7px;font-size: 12px">
                <span>没有账号？</span>
                <span>忘记密码？</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginForm",
        data() {
            return {
                user: {}
            }
        },
        methods: {
            login() {
                this.$api.login(this.user).then((res) => {
                    this.$router.push("/task")
                })

            }
        }
    }
</script>

<style scoped lang="scss">
    .login-form {
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

    .full {
        width: 100%;
    }

    .inner-form {

    }
</style>