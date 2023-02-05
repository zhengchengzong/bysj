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
        <el-card style="margin-top:20px;height:460px;">
          <el-table
                :data="tableData"
                style="width: 100%"
                height="250">
                <el-table-column
                v-for="(val,key) in tableLabel"
                  fixed
                  :prop="key"
                  :label="val"
                  :key="key">
                </el-table-column>
                <!-- <el-table-column
                  prop="name"
                  label="姓名"
                  >
                </el-table-column>
                <el-table-column
                  prop="province"
                  label="省份"
                  >
                </el-table-column>
                <el-table-column
                  prop="city"
                  label="市区"
                  >
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="地址"
                  >
                </el-table-column>
                <el-table-column
                  prop="zip"
                  label="邮编"
                  >
                </el-table-column> -->
              </el-table>
        </el-card>
      </el-col>
      <el-col :span="16"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return {
      tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }],
        tableLabel:{
          date:"日期",name:"姓名",province:"省份",city:"市区",address:"地址",zip:"邮编"
        }
    }
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
</style>