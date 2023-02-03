import VueRouter from "vue-router"
import Login from "../views/Login/index.vue"
import Layout from "../views/Layout/index.vue"
import Home from "../views/Home/index.vue"


// 实验室信息管理
import LabsInfoManage from "../views/LabsInfoManage/index.vue"
import LabsAdd from "../views/LabsInfoManage/LabsAdd/index.vue"
import LabsQuery from "../views/LabsInfoManage/LabsQuery/index.vue"
import LabsModify from "../views/LabsInfoManage/LabsModify/index.vue"

const router = new VueRouter({
    routes: [{
            path: '/',
            component: Layout,
            children: [{
                path: '/',
                name: 'home',
                component: Home
            }, {
                path: "/labsmanage",
                name: "labsmanage",
                component: LabsInfoManage,
                children: [
                    { path: 'labsadd', name: 'labsadd', component: LabsAdd },
                    { path: 'labsquery', name: 'labsquery', component: LabsQuery },
                    { path: 'labsmodify', name: 'labsmodify', component: LabsModify },


                ]
            }]

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