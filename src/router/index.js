import VueRouter from "vue-router"
import Login from "../views/Login/index.vue"
import Layout from "../views/Layout/index.vue"
import Home from "../views/Home/index.vue"


// 实验室信息管理
import LabsInfoManage from "../views/LabsInfoManage/index.vue"
import LabsAdd from "../views/LabsInfoManage/LabsAdd/index.vue"
import LabsQuery from "../views/LabsInfoManage/LabsQuery/index.vue"
import LabsModify from "../views/LabsInfoManage/LabsModify/index.vue"

//实验室设备管理
import EquipmentManagement from "../views/EquipmentManagement/index.vue"
import AddEquipment from "../views/EquipmentManagement/AddEquipment/index.vue"
import DeleteEquipment from "../views/EquipmentManagement/DeleteEquipment/index.vue"
import MaintenanceEquipment from "../views/EquipmentManagement/MaintenanceEquipment/index.vue"
import ModifyEquipment from "../views/EquipmentManagement/ModifyEquipment/index.vue"
import QueryEquipment from "../views/EquipmentManagement/QueryEquipment/index.vue"
import RepairEquipment from "../views/EquipmentManagement/RepairEquipment/index.vue"

// 用户管理
import Users from "../views/Users/index.vue"
import AddUsers from "../views/Users/AddUsers/index.vue"
import DeleteUsers from "../views/Users/DeleteUsers/index.vue"
import ModifyUsers from "../views/Users/ModifyUsers/index.vue"
import MyselfManagement from "../views/Users/MyselfManagement/index.vue"
import OthersManagement from "../views/Users/OthersManagement/index.vue"
import QueryUsers from "../views/Users/QueryUsers/index.vue"
import Cookies from "js-cookie"




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
            }, {
                path: "/equipmentmanagement",
                name: "equipmentmanagement",
                component: EquipmentManagement,
                children: [{ path: 'addequipment', name: 'addequipment', component: AddEquipment },
                    { path: 'deleteequipment', name: 'deleteequipment', component: DeleteEquipment },
                    { path: 'maintenanceequipment', name: 'maintenanceequipment', component: MaintenanceEquipment },
                    { path: 'modifyequipment', name: 'modifyequipment', component: ModifyEquipment },
                    { path: 'queryequipment', name: 'queryequipment', component: QueryEquipment },
                    { path: 'repairequipment', name: 'repairequipment', component: RepairEquipment },
                ]
            }, {
                path: "/users",
                name: 'users',
                component: Users,
                children: [{ path: 'myselfmanagement', name: 'myselfmanagement', component: MyselfManagement },
                    {
                        path: 'othersmanagement',
                        name: 'othersmanagement',
                        component: OthersManagement,
                        // beforeEnter: (to, from, next) => {
                        //         // ...
                        //         console.log("前置路由守卫", to, from)

                        //         if (JSON.parse(localStorage.getItem("grade")) === "超级管理员") {
                        //             console.log("匹配成功")
                        //             next()
                        //         } else {
                        //             alert('无权访问')

                        //         }


                        //     }
                        // children: [
                        //     { path: 'addusers', name: 'addusers', component: AddUsers },
                        //     { path: 'deleteusers', name: 'deleteusers', component: DeleteUsers },
                        //     { path: 'modifyusers', name: 'modifyusers', component: ModifyUsers },
                        //     { path: 'queryusers', name: 'queryusers', component: QueryUsers }
                        // ]
                    }
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
    // console.log("TO:", to, "FROM", from)
    // console.log("全局前置路由启动....")
    const token = Cookies.get("token")
        //token不存在当前用户未登入，要跳转到登入界面
    if (!token && to.name !== 'login') {
        console.log("全局前置路由启动:1....")

        next({ name: 'login' })
    } else if (token && to.name === 'login') {
        console.log("全局前置路由启动:2....")

        next({ name: 'home' })
    } else {
        console.log("全局前置路由启动:3....")

        next()
    }

})

export default router