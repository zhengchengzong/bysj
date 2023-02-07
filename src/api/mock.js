import Mock from 'mockjs'
import homeapi from './mockServeData/home'

Mock.mock('/api/home/getData', homeapi.getStatisticalData)