<template>
  <div>
    <el-row>
      <el-col :span="8">
        <el-card class="box-card">
           <div class="user">
            <img src="@/assets/images/touxiang.png" alt="">
            <div class="userinfo">
                <p class="name">{{name}}</p>
                <p class="access">{{grade}}</p>
            </div>
           </div>
           <div class="login-info">
            <p>工号: <span>{{id}}</span></p>
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
                  <el-table
                              :data="tableData2"
                              style="width: 100%"
                              height="250">
                              <el-table-column
                              v-for="(val,key) in tableLabel2"
                              :key="key"
                                fixed
                                :prop="key"
                                :label="val">
                                
                              </el-table-column>
                </el-table>
       </el-card>
       <div class="tuxiang" style="margin-left:29px;margin-top:18px">
          <el-card style="height:380px;width:67%;margin-right:5px">
                      <el-table
                              :data="equipmentdata"
                              style="width: 100%"
                              height="360">
                              <el-table-column
                               v-for="(val,key) in tableLabel3"
                              :key="key"
                                fixed
                                :prop="key"
                                :label="val"
                                >
                              </el-table-column>
            
                            </el-table>
          </el-card>
          <el-card style="height:380px;width:33%">
                <div ref="echarts1" style="height:230px" class="piechart"></div>
          </el-card>
       </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {getData} from '@/api/index'
import * as echarts from 'echarts';
export default {
  data(){
    return {
      name:'',
      grade:'',
      id:''
      ,
      tableData:[],
      tableData2:[],
        countDate:{
        },
        equipmentdata:[]
        ,
        tableLabel:{
          id:"工号",date:"日期",name:"姓名",gender:"性别",grade:"权限",phonenumber:"手机号"
        },
        tableLabel2:{
          id:"实验室编号",name:"实验室名字",manager:"实验室管理员ID",personnelcapacity:"实验室人员容量",geography:"地理位置"
        },
        tableLabel3:{id:"设备编号",name:"设备名称",addtime:"入库时间",status:"设备状态",laboratoryid:"所在实验室编号",money:"设备金额"}
       
    }
  },mounted(){


          let message=localStorage.getItem('grade')
          
          this.grade=JSON.parse(message)[2]
          this.name=JSON.parse(message)[0]
          this.id=JSON.parse(message)[1]



         getData().then(({data})=>{
          this.tableData=data.data.tableData
          this.tableData2=data.data.tableData2
          this.countDate=data.data.countDate
          this.equipmentdata=data.data.equipmentdata



          //饼转图
         const echarts1=echarts.init(this.$refs.echarts1)
         const echarts1Option={
          title:{text:"设备状态分布图",x:"center",y:"top",itemGap:30,
          textStyle: {
              fontSize: 16,
              fontWeight: 'bolder',
              
            },subtextStyle: {
              fontSize: 18,
              color: '#8B2323'
            }
},legend:{orient: 'vertical',x: 'left',y: 'center',itemWidth: 24,itemHeight: 18,
            textStyle: {
              color: '#666'  // 图例文字颜色
            },itemGap: 30,
           
            data: ['正常使用','维护中','报修']},
          tooltip:{
                  trigger:"item"
         },
         color:["#0f78f4",
                    "#dd536b",
                    "#9462e5",
                    "#a6a6a6",
                    "#e1bb22",
                    "#39c362",
                    "#3ed1cf",],
         series:[{
          data:data.data.videoData,
          type:'pie',
          label:{
          normal:{
            position:'inner',
            formatter:"{c}"
          }
         }
         }]
         }
         echarts1.setOption(echarts1Option)
         });
         
  },
  

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
.piechart{
  position: relative;
  top: 25px;
  left: 12px;
}
</style>