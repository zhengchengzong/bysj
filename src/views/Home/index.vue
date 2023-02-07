<template>
  <div>
    <el-row>
      <el-col :span="8">
        <el-card class="box-card">
           <div class="user">
            <img src="@/assets/images/touxiang.png" alt="">
            <div class="userinfo">
                <p class="name">Admin</p>
                <p class="access">超级管理员</p>
            </div>
           </div>
           <div class="login-info">
            <p>工号: <span>112133</span></p>
           </div>
        </el-card>
        <el-card style="margin-top:20px;height:530px;">
          <el-table
                :data="tableData"
                style="width: 100%;"
                height="520">
                <el-table-column
                v-for="(val,key) in tableLabel"
                  fixed
                  :prop="key"
                  :label="val"
                  :key="key">
                </el-table-column>
              </el-table>
        </el-card>
      </el-col>
      <el-col :span="16">
        <div class="num">
           <el-card :body-style="{display:'flex'}">
            <i class="icon el-icon-success" style="background:#5ab1ef;"></i>
            <div class="detail">
              <p class="price">￥{{countDate.all_assets}}</p>
              <p class="desc">未使用总资产</p>
            </div>
            </el-card>
            <el-card :body-style="{display:'flex'}">
            <i class="icon el-icon-s-order" style="background:#2ec7c9;"></i>
            <div class="detail">
              <p class="price">￥{{countDate.use_assets}}</p>
              <p class="desc">已使用资产</p>
            </div>
            </el-card>
            <el-card :body-style="{display:'flex'}">
            <i class="icon el-icon-star-on" style="background:#ffb980;" ></i>
            <div class="detail">
              <p class="price">￥{{countDate.surplus_assets}}</p>
              <p class="desc">剩余总资产</p>
            </div>
            </el-card>
        </div>
       <el-card style="height:280px;margin-left:29px;margin-top: 18px;">

       </el-card>
       <div class="tuxiang" style="margin-left:29px;margin-top:18px">
          <el-card style="height:380px;width:67%;margin-right:5px"></el-card>
          <el-card style="height:380px;width:33%"></el-card>
       </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {getData} from '@/api/index'
export default {
  data(){
    return {
      tableData:[],
        tableLabel:{
          jobid:"工号",date:"日期",name:"姓名",gender:"性别",authority:"权限",phonenumber:"手机号"
        },
        countDate:{
              all_assets:10000,
              use_assets:500,
              surplus_assets:9500
        }
    }
  },mounted(){
         getData().then(({data})=>{
          
          this.tableData=data.data.tableData
         })
  }

}
</script>

<style>
.user{
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
}
.user img{
  margin-right: 40px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.userinfo .name{
  font-size: 32px;
  margin-bottom: 10px;
}
.userinfo .access{
  color: #999999;
}
.login-info p{
  line-height: 28px;
  font-size: 14px;
  color: #999999;
}
.login-info p span{
  color: #666666;
  margin-left: 60px;
}
.num{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.home .num .el-card{
  width: 32%;
  margin-bottom: 20px;
}
.num .icon{
  width: 80px;
  height: 80px;
  font-size: 30px;
  text-align: center;
  line-height: 80px;
  color: #fff;
}
.detail{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
}
.detail .price{
  font-size: 30px;
  margin-bottom: 10px;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 30px;
  height: 30px;
  padding-right: 80px;
}
.detail .desc{
  font-size:14px;
  color: #999;
  text-align: center;
  margin-top: 23px;
  margin-bottom: 0;
  padding-right: 80px;
}
.tuxiang{
  display: flex;
  justify-content: space-between;
}
</style>