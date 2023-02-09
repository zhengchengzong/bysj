import Mock from 'mockjs'
// 图表数据
let List = []
export default {
    getStatisticalData: () => {
        //Mock.Random.float 产生随机数100到8000之间 保留小数 最小0位 最大0位
        for (let i = 0; i < 7; i++) {
            List.push(
                Mock.mock({
                    苹果: Mock.Random.float(100, 8000, 0, 0),
                    vivo: Mock.Random.float(100, 8000, 0, 0),
                    oppo: Mock.Random.float(100, 8000, 0, 0),
                    魅族: Mock.Random.float(100, 8000, 0, 0),
                    三星: Mock.Random.float(100, 8000, 0, 0),
                    小米: Mock.Random.float(100, 8000, 0, 0)
                })

            )
        }
        return {
            code: 20000,
            data: {
                // 饼图
                videoData: [{
                        name: '正常使用',
                        value: 10
                    },
                    {
                        name: '维护中',
                        value: 3
                    },
                    {
                        name: '报修',
                        value: 2
                    }
                ],
                // 柱状图
                userData: [{
                        date: '周一',
                        new: 5,
                        active: 200
                    },
                    {
                        date: '周二',
                        new: 10,
                        active: 500
                    },
                    {
                        date: '周三',
                        new: 12,
                        active: 550
                    },
                    {
                        date: '周四',
                        new: 60,
                        active: 800
                    },
                    {
                        date: '周五',
                        new: 65,
                        active: 550
                    },
                    {
                        date: '周六',
                        new: 53,
                        active: 770
                    },
                    {
                        date: '周日',
                        new: 33,
                        active: 170
                    }
                ],
                // 折线图
                orderData: {
                    date: ['20191001', '20191002', '20191003', '20191004', '20191005', '20191006', '20191007'],
                    data: List
                },
                tableData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    gender: "男",
                    grade: '一般管理员',
                    id: '001',
                    phonenumber: 15766262626
                }, {
                    date: '2016-05-02',
                    name: '刘小千',
                    gender: "女",
                    grade: '一般管理员',
                    id: '002',
                    phonenumber: 15766262626
                }, {
                    date: '2016-05-04',
                    name: '刘大千',
                    gender: "女",
                    grade: '一般管理员',
                    id: '003',
                    phonenumber: 15766262626

                }, {
                    date: '2016-05-04',
                    name: '刘大千',
                    gender: "女",
                    grade: '一般管理员',
                    id: '003',
                    phonenumber: 15766262626

                }, {
                    date: '2016-05-04',
                    name: '刘大千',
                    gender: "女",
                    grade: '一般管理员',
                    id: '003',
                    phonenumber: 15766262626

                }, {
                    date: '2016-05-04',
                    name: '刘大千',
                    gender: "女",
                    grade: '一般管理员',
                    id: '003',
                    phonenumber: 15766262626

                }, {
                    date: '2016-05-04',
                    name: '刘大千',
                    gender: "女",
                    grade: '一般管理员',
                    id: '003',
                    phonenumber: 15766262626

                }, {
                    date: '2016-05-04',
                    name: '刘大千',
                    gender: "女",
                    grade: '一般管理员',
                    id: '011',
                    phonenumber: 15766262626

                }],
                tableData2: [{ id: 10001, name: "计算机实验室", manager: "011", personnelcapacity: 30, geography: "南区51栋#102" },
                    { id: 10001, name: "计算机实验室", manager: "011", personnelcapacity: 30, geography: "南区51栋#102" }, { id: 10001, name: "计算机实验室", manager: "011", personnelcapacity: 30, geography: "南区51栋#102" }, { id: 10001, name: "计算机实验室", manager: "011", personnelcapacity: 30, geography: "南区51栋#102" }, { id: 10001, name: "计算机实验室", manager: "011", personnelcapacity: 30, geography: "南区51栋#102" },

                ],
                countDate: {
                    all_assets: 10000,
                    use_assets: 500,
                    surplus_assets: 9500
                },
                equipmentdata: [{ id: "001", name: "3D建模设备", addtime: "2019-2-3", status: "正常", laboratoryid: 10001, money: "￥36800" },
                    { id: "002", name: "3D建模设备", addtime: "2019-2-3", status: "正常", laboratoryid: 10001, money: "￥36800" },
                    { id: "005", name: "3D建模设备", addtime: "2019-2-3", status: "维护中", laboratoryid: 10001, money: "￥36800" },
                    { id: "003", name: "3D建模设备", addtime: "2019-2-3", status: "报修中", laboratoryid: 10003, money: "￥36800" },
                    { id: "003", name: "3D建模设备", addtime: "2019-2-3", status: "正常", laboratoryid: 10003, money: "￥36800" }, { id: "003", name: "3D建模设备", addtime: "2019-2-3", status: "正常", laboratoryid: 10003, money: "￥36800" }, { id: "003", name: "3D建模设备", addtime: "2019-2-3", status: "正常", laboratoryid: 10003, money: "￥36800" }, { id: "003", name: "3D建模设备", addtime: "2019-2-3", status: "正常", laboratoryid: 10003, money: "￥36800" }, { id: "010", name: "3D建模设备", addtime: "2019-2-3", status: "正常", laboratoryid: 10003, money: "￥36800" }

                ]
            }
        }
    }
}