import { mock } from "mockjs"
import http from "../utils/request"

//首页数据获取
export const getData = () => {
        console.log("连接接口获取数据中！！！！")
        return http.get('/home/getData')
    }
    //一般管理员数据获取-获取列表数据
export const getothersuserData = (params) => {
        console.log("连接接口获取数据中！！！！", "getothersuserData")
        return http.get('/user/othersmanagement/getothersuserData', params)
    }
    //一般管理员数据获取-添加一般管理员
export const addothersuserData = (data) => {
        console.log("连接接口获取数据中！！！！", "addothersuserData", data)

        return http.post('/user/othersmanagement/addothersuserData', data)
    }
    //一般管理员数据获取-编辑用户
export const editothersuserData = (data) => {
        console.log("连接接口获取数据中！！！！", "editothersuserData", data)
        return http.post('/user/othersmanagement/editothersuserData', data)
    }
    //一般管理员数据获取-查找用户
export const queryothersuserData = (data) => {
        console.log("连接接口获取数据中！！！！", "queryothersuserData", data)
        return http.post('/user/othersmanagement/queryothersuserData', data)
    }
    //一般管理员数据获取-删除一般管理员
export const deleteothersuserData = (data) => {
        console.log("连接接口获取数据中！！！！", "deleteothersuserData", data)
        return http.post('/user/othersmanagement/deleteothersuserData', data)
    }
    //用户登录许可接口 
export const getuserpermission = (data) => {
        console.log("连接接口获取数据中！！！！", "getuserpermission", data)
        return http.post('/permission/getMenu', data)
    }
    //获取本用户数据
export const getmyinfo = (params) => {
    console.log("连接接口获取数据中！！！！", 'getmyinfo', params)
    return http.post('/myuser/getmyinfo', params)
}