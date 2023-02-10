import Mock from 'mockjs'
import homeapi from './mockServeData/home'
import othersuserapi from './mockServeData/Othersuser'


Mock.mock('/api/home/getData', homeapi.getStatisticalData)

//其它用户管理数据模拟
Mock.mock('/api/user/othersmanagement/getothersuserData', othersuserapi.getUserList)
Mock.mock('/api/user/othersmanagement/addothersuserData', "post", othersuserapi.addUser)
Mock.mock('/api/user/othersmanagement/editothersuserData', "post", othersuserapi.editUser)
Mock.mock('/api/user/othersmanagement/queryothersuserData', "post", othersuserapi.queryUser)