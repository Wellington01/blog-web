import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import axios from 'axios';
import VueRouter from 'vue-router'
import { routes } from './routes.js'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
axios.defaults.headers['Content-Type'] = 'application/json';

Vue.use(ElementUI)
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});