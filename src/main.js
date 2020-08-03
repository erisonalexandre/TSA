import Vue from "vue"
import App from "./App.vue"
import router from "./router"

import "@/assets/scss/global.scss"
import mascara from "./diretivas/mascara"

Vue.config.productionTip = false

Vue.directive("mascara", mascara)
new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app")
