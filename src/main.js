import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Settings from './components/Settings.vue'

Vue.use(VueRouter);

const rute = [
 {path: "/", component: Home},
 { path: "/settings", component: Settings},
 { path: "/login", component: Login},
];

const router = new VueRouter({
  routes: rute,
  mode: 'history'
});

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
