<template>
    <div class="login-footer">
        <p>© 2018 Worktile.com
            京ICP备13017353号-3 京公网安备11010802012357号</p>
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
</style>