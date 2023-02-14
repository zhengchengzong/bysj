<template>
  <div>
  <el-descriptions class="margin-top" title="本用户管理" :column="2" size="" border>
    <template slot="extra">
      <el-button type="primary" size="small">操作</el-button>
    </template>


    <el-descriptions-item v-for="(val,key,i) in tableData" :key="i">
      <template slot="label">
        
        <i :class="iconData[i]"></i>
        {{key}}
        </template>
        {{val}}
    </el-descriptions-item>


    <!-- <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        手机号
      </template>
      18100000000
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        居住地
      </template>
      苏州市
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-tickets"></i>
        备注
      </template>
      <el-tag size="small">学校</el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-office-building"></i>
        联系地址
      </template>
      江苏省苏州市吴中区吴中大道 1188 号
    </el-descriptions-item> -->
  </el-descriptions>
  </div>
</template>

<script>
import {getmyinfo} from '@/api/index'
export default {
    data () {
      return {
        id:"",
       tableData:{},
        iconData:['iconfont icon-idcard','iconfont icon-date','iconfont icon-nickname','iconfont icon-gender','iconfont icon-phone','iconfont icon-email','iconfont icon-grade','iconfont icon-password']
      };
    },
    methods:{
       

       
    },
    mounted(){
      this.id=JSON.parse(localStorage.getItem('grade'))[1]
      getmyinfo({id:this.id}).then(({data})=>{
        this.tableData=data.data[0]
        console.log("获取到的本人数据信息",this.tableData)

      })
    }
  }
</script>

<style scope>
  
</style>