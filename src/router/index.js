import Vue from "vue"
import vueRouter from "vue-router"
Vue.use(vueRouter)
const home = ()=> import("../views/home/home");
const car = ()=> import("../views/car/car");
const me = ()=> import("../views/me/me");
const lei = ()=> import("../views/lei/lei");
const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    component:home
  },
  {
    path: '/me',
    component:me
  },
  {
    path: '/lei',
    component:lei
  },
  {
    path: '/car',
    component:car
  },
]
const router = new vueRouter({
  routes,
  mode:"history"
})
export default router
