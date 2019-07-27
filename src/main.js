import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Settings from './components/Settings.vue';
import Help from './components/Help.vue';
import SignIn from './components/SignIn.vue'

Vue.use(VueRouter);

const rute = [
  {path: "/home",component: Home}, 
  {path: '/settings',component: Settings},
  {path:'/help', component: Help} ,
  {path:'/sign-in', component: SignIn}

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
