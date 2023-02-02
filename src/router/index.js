import VueRouter from "vue-router"
import Login from "../views/Login/index.vue"
import Layout from "../views/Layout/index.vue"

const router = new VueRouter({
    routes: [{
            path: '/',
            component: Layout,

        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})
router.beforeEach((to, from, next) => {
    console.log("@@@@@@", to, from)
    next()
})
export default router