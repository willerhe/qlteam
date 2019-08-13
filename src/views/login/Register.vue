<template>

    <div class="login">
        <login-title></login-title>
        <register-form></register-form>
        <login-footer></login-footer>

    </div>

</template>

<script>
    import LoginTitle from "./LoginTitle";
    import LoginFooter from "./LoginFooter";
    import RegisterForm from "./RegisterForm";


    export default {
        name: "Register",
        components: {LoginTitle, LoginFooter, RegisterForm}
    }
</script>

<style scoped>
    .login {
        background-color: white;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-image: url("../../assets/lbg1.jpg");
        background-size: cover;
    }

</style>