import Mock from 'mockjs'
import homeapi from './mockServeData/home'
import othersuserapi from './mockServeData/Othersuser'
import permission from './mockServeData/permission'



Mock.mock('/api/home/getData', homeapi.getStatisticalData)

//其它用户管理数据模拟
Mock.mock(/api\/user\/othersmanagement\/getothersuserData/, othersuserapi.getUserList)
Mock.mock('/api/user/othersmanagement/addothersuserData', "post", othersuserapi.addUser)
Mock.mock('/api/user/othersmanagement/editothersuserData', "post", othersuserapi.editUser)
Mock.mock('/api/user/othersmanagement/queryothersuserData', "post", othersuserapi.queryUser)
Mock.mock('/api/user/othersmanagement/deleteothersuserData', "post", othersuserapi.deleteUser)
    //模拟权限登录
Mock.mock(/api\/permission\/getMenu/, 'post', permission.getMenu)