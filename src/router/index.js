import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "lista",
    component: () =>
      import(/* webpackChunkName: "lista" */ "../views/Lista.vue")
  },
  {
    path: "/cadastro",
    name: "cadastro",
    component: () =>
      import(/* webpackChunkName: "cadastro" */ "../views/Cadastro.vue")
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
