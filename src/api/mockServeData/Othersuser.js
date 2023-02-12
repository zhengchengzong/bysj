import Mock from 'mockjs'

export default {
    getUserList: (params) => {
        console.log("酷酷酷酷酷酷酷酷酷酷酷酷", params)
        return {
            code: 2000,
            data: [{ id: "001", date: "2022-12-23", name: "小红", gender: "女", phonenumber: "11213131", email: "12123@qq.com", grade: "一般管理员", password: "1212312" },
                { id: "001", date: "2022-12-23", name: "小红", gender: "女", phonenumber: "11213131", email: "12123@qq.com", grade: "一般管理员", password: "1212312" },
                { id: "001", date: "2022-12-23", name: "小红", gender: "女", phonenumber: "11213131", email: "12123@qq.com", grade: "一般管理员", password: "1212312" }, { id: "001", date: "2022-12-23", name: "小红", gender: "女", phonenumber: "11213131", email: "12123@qq.com", grade: "一般管理员", password: "1212312" }, { id: "001", date: "2022-12-23", name: "小红", gender: "女", phonenumber: "11213131", email: "12123@qq.com", grade: "一般管理员", password: "1212312" }, { id: "001", date: "2022-12-23", name: "小红", gender: "女", phonenumber: "11213131", email: "12123@qq.com", grade: "一般管理员", password: "1212312" }, { id: "001", date: "2022-12-23", name: "小红", gender: "女", phonenumber: "11213131", email: "12123@qq.com", grade: "一般管理员", password: "1212312" }, { id: "001", date: "2022-12-23", name: "小红", gender: "女", phonenumber: "11213131", email: "12123@qq.com", grade: "一般管理员", password: "1212312" }, { id: "001", date: "2022-12-23", name: "小红", gender: "女", phonenumber: "11213131", email: "12123@qq.com", grade: "一般管理员", password: "1212312" }, { id: "001", date: "2022-12-23", name: "小红", gender: "女", phonenumber: "11213131", email: "12123@qq.com", grade: "一般管理员", password: "1212312" }, { id: "001", date: "2022-12-23", name: "小红", gender: "女", phonenumber: "11213131", email: "12123@qq.com", grade: "一般管理员", password: "1212312" }, { id: "111", date: "2022-12-23", name: "小红", gender: "女", phonenumber: "11213131", email: "12123@qq.com", grade: "一般管理员", password: "1212312" }, { id: "001", date: "2022-12-23", name: "小红", gender: "女", phonenumber: "11213131", email: "12123@qq.com", grade: "一般管理员", password: "1212312" }, { id: "001", date: "2022-12-23", name: "小红", gender: "女", phonenumber: "11213131", email: "12123@qq.com", grade: "一般管理员", password: "1212312" }, { id: "001", date: "2022-12-23", name: "小红", gender: "女", phonenumber: "11213131", email: "12123@qq.com", grade: "一般管理员", password: "1212312" }, { id: "001", date: "2022-12-23", name: "小红", gender: "女", phonenumber: "11213131", email: "12123@qq.com", grade: "一般管理员", password: "1212312" }, { id: "001", date: "2022-12-23", name: "小红", gender: "女", phonenumber: "11213131", email: "12123@qq.com", grade: "一般管理员", password: "1212312" }, { id: "001", date: "2022-12-23", name: "小红", gender: "女", phonenumber: "11213131", email: "12123@qq.com", grade: "一般管理员", password: "1212312" }, { id: "001", date: "2022-12-23", name: "小红", gender: "女", phonenumber: "11213131", email: "12123@qq.com", grade: "一般管理员", password: "1212312" }, { id: "001", date: "2022-12-23", name: "小红", gender: "女", phonenumber: "11213131", email: "12123@qq.com", grade: "一般管理员", password: "1212312" }, { id: "001", date: "2022-12-23", name: "小红", gender: "女", phonenumber: "11213131", email: "12123@qq.com", grade: "一般管理员", password: "1212312" }, { id: "111", date: "2022-12-23", name: "小红", gender: "女", phonenumber: "11213131", email: "12123@qq.com", grade: "一般管理员", password: "1212312" }

            ]
        }
    },
    addUser: (data) => {
        console.log("添加一般管理员中。。。", data)
    },
    editUser: (data) => {
        console.log("编辑一般管理员中。。。", data)
    },
    queryUser: (data) => {
        console.log("查找一般管理员中。。。", data)
    },
    deleteUser: (data) => {
        console.log("删除一般管理员中。。。", data)
    }
}