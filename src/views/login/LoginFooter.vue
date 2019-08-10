<template>
    <div class="login-footer">
        <p class="footer-p">© 2018 qlteam.com
            沪ICP备888888880号-1 沪公网安备88888888888号</p>
    </div>
</template>

<script>
    export default {
        name: "LoginFooter"
    }
</script>

<style scoped>
    .login-footer{
        flex-grow: 2;
        display: flex;
        flex-direction: column-reverse;
        justify-content: end;
    }
    .footer-p{
        color: #818181;
    }
</style>