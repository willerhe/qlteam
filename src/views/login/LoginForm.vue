<template>
    <transition name="el-zoom-in-center">
        <div class="login-form">
            <div style="width: 400px" class="inner-form">
                <h2 style="margin: 0px;color: #4B62EA" >登录</h2>
                <p style="color: #ABA4BB;margin: 0px;margin-bottom: 7px">请使用您本人的账号密码登录</p>
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
                <el-button type="primary" round @click="login" class="full">登录</el-button>

                <div style="display: flex;justify-content: space-between;padding: 7px;font-size: 12px">
                    <router-link to="/sys/register" style="text-decoration: none">
                        <span style="color: #2765c2">没有账号？</span>
                    </router-link>
                    <span>忘记密码？</span>
                </div>
            </div>

        </div>
    </transition>

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
                    this.$store.state.user = res.data.user
                    // todo 前端怎么存储用户的信息  cookies ? localStorage？ vuex 是否持久化的
                    window.localStorage.setItem("authorization", res.data.authorization)
                    window.localStorage.setItem("id",res.data.user.id)
                    this.$router.push("/ql/task")
                })

            }
        }
    }
</script>

<style scoped lang="scss">
    .login-form {
        min-width: 600px;
        flex-grow: 3;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 20px;

    }

    .full {
        width: 100%;
    }

    .inner-form {

    }
</style>