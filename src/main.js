import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import { routes } from './routes.js'
import store from './store/index'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + '5ELRT2DWyqTraIE6duDU9BZswVDmbmEtEtFbVVtJhU3aT8ca14F8kZGeftop';

Vue.use(ElementUI)
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});