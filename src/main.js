import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Help from './components/Help.vue'
import Settings from './components/Settings.vue'
import SignIn from './components/SignIn.vue'


Vue.use(VueRouter);
const routes=[
  { path:'/home',component: Home},
  { path:'/settings',component: Settings},
  { path:'/help',component: Help},
  { path:'/sign-in',component: SignIn},

 ]
 const router= new VueRouter({
   routes: routes,
   mode: 'history'
 })
 
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
