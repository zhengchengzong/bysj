import http from "../utils/request"

export const getData = () => {
    console.log("连接接口获取数据中！！！！")
    return http.get('/home/getData')
}