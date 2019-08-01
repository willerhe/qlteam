import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from "./router";

Vue.use(ElementUI)

import fullCalendar from 'vue-fullcalendar'

Vue.component('full-calendar', fullCalendar)

Vue.config.productionTip = false


new Vue({
    el: '#app',
    router,
    render: h => h(App),
}).$mount('#app')

