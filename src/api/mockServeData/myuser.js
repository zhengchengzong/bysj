import Mock from 'mockjs'
export default {
    getmyinfo: (params) => {
        console.log("Mock的获取本用户信息调用...", params)
        return {
            code: 2000,
            data: [{ id: "001", date: "2022-12-23", name: "小红", gender: "女", phonenumber: "11213131", email: "12123@qq.com", grade: "一般管理员", password: "1212312" }]
        }
    }
}