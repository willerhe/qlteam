<template>
    <div>
        <el-menu style="height: 100vh"
                 :default-active="'m'+activeIndex"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b">
            <router-link :to="item.path" style="text-decoration: none" v-for="(item,i) in menus" :key="item.path">
                <el-menu-item :index="'m'+i" @click="rememberMe(i)">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.title}}</span>
                </el-menu-item>
            </router-link>

        </el-menu>
    </div>


</template>

<script>
    import {Routers} from '../router'

    export default {
        name: "MenuBar",
        data() {
            return {
                activeIndex: 0,
                menus: []
            }
        },
        methods: {
            rememberMe: function (index) {
                window.localStorage.setItem("activeIndex", index)

            }
        },
        mounted() {
            this.menus = Routers.filter(item => {
                return !item.hidden
            })
            this.activeIndex = window.localStorage.getItem("activeIndex") || 0


        }
    }
</script>

<style scoped>
</style>