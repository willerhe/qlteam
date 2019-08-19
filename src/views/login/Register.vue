<template>

    <div class="login">
        <login-title></login-title>
        <div style="width: 100%;display: flex;justify-content: space-between;">
            <register-form></register-form>
            <div style="width: 50%"></div>
        </div>

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
    .login{
        background-color: white;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-image: url("../../assets/lbg2.png");
        background-repeat: no-repeat;
        background-size:100% 100%;
        background-attachment: fixed;

    }


</style>