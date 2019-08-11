import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from "./router";
import fullCalendar from 'vue-fullcalendar'

import api from "./api/api";
import filters from "./filter";

Vue.use(ElementUI)
Vue.component('full-calendar', fullCalendar)

// 全局加载api
Vue.prototype.$api = api

Vue.config.productionTip = false

Vue.filter("normalTime", filters.formatTime)

import EVueContextmenu from 'e-vue-contextmenu'

Vue.use(EVueContextmenu)

import './permission'
import store from './store/store'


new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App),
}).$mount('#app')

