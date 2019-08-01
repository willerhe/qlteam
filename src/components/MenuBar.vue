<template>
    <div>
        <el-menu style="height: 100vh"
                 default-active="0"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b">
            <router-link :to="item.path" style="text-decoration: none" v-for="(item,i) in menus" :key="item.path">
                <el-menu-item  :index="i">
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
                menus: []
            }
        },
        mounted() {
            this.menus = Routers.filter(item => {
                return !item.hidden
            })
        }
    }
</script>

<style scoped>
</style>