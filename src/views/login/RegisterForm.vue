<template>
    <div class="login-form">
        <div style="width: 400px">
            <h2>注册</h2>
            <el-form :rules="rules" ref="form" :model="user">
                <el-form-item prop="nickName">
                    <el-input
                            placeholder="昵称"
                            v-model="user.nickName"
                            style="margin-bottom: 14px"
                            prefix-icon="el-icon-user">
                    </el-input>
                </el-form-item>
                <el-form-item prop="account">
                    <el-input
                            placeholder="账号"
                            v-model="user.account"
                            style="margin-bottom: 14px"
                            prefix-icon="el-icon-user">
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                            placeholder="密码"
                            show-password
                            v-model="user.password"
                            style="margin-bottom: 14px"
                            prefix-icon="el-icon-lock">
                    </el-input>
                </el-form-item>
                <el-form-item prop="password1">
                    <el-input
                            placeholder="确认密码"
                            show-password
                            v-model="user.password1"
                            style="margin-bottom: 14px"
                            prefix-icon="el-icon-lock">
                    </el-input>
                </el-form-item>
            </el-form>

            <el-button type="primary" @click="register" class="full">注册</el-button>

            <div style="display: flex;justify-content: space-between;padding: 7px;font-size: 12px">
                <router-link to="/sys/login" style="text-decoration: none">
                    <span style="color: #2765c2">已有账号?</span>
                </router-link>
                <span>忘记密码？</span>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Register",
        data() {

            let checkPassword1 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.user.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            }
            return {
                user: {},
                rules: {
                    nickName: [{required: true, message: "请输入昵称", trigger: 'blur'}, {
                        min: 2,
                        max: 12,
                        message: '长度在 2 到 12 个字符',
                        trigger: 'blur'
                    }],
                    account: [{min: 4, max: 12, message: '请输入4到12个字符的合法账号', trigger: 'blur'}],
                    password: [{min: 4, max: 12, message: '请输入4到12个字符的合法密码', trigger: 'blur'}],
                    password1: [{validator: checkPassword1, trigger: 'blur', message: "两次输入密码不一致"}],
                }
            }
        },
        methods: {
            register
                () {
                this.$api.register(this.user).then((res) => {
                    this.$message.success("注册成功,重新登录！")
                    this.$router.push("/sys/login")
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
    .el-form-item{
    }

    .full {
        width: 100%;
    }

</style>