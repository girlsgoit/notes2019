import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Home from './components/Home.vue'
import Axios from 'axios'

Vue.use(VueRouter);

const rute = [{
    path: "/",
    component: Home
},];

const router = new VueRouter({
    routes: rute,
    mode: 'history'
});

Vue.config.productionTip = false;


new Vue({
    render: h => h(App),
    router
}).$mount('#app');

Axios.defaults.baseURL = 'https://notes-api.girlsgoit.org/';

