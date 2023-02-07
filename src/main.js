import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import router from "./router/index"
import store from './store'
import './plugins/element'
import './assets/css/reset.css'
import './assets/css/iconfont.css'
import './api/mock'

Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
    render: h => h(App),
    router: router,
    store: store
}).$mount('#app')