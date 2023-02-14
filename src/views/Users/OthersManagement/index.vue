<template>
  <div class="manage">
        <el-dialog
                  title="提示"
                  :visible.sync="dialogVisible"
                  width="38%"
                  :before-close="handleClose">
                  
                <el-form ref="form" :model="form" label-width="80px" :inline='true' :rules="rules">
                  <el-form-item label="员工编号" prop="id">
                    <el-input v-model="form.id" placeholder="请输入员工编号"></el-input>
                  </el-form-item>
                  <el-form-item label="登入密码" prop="password">
                    <el-input v-model="form.password" placeholder="请输入登入密码"></el-input>
                  </el-form-item>
                  <el-form-item label="姓名" prop="name">
                    <el-input v-model="form.name" placeholder="请输入员工姓名"></el-input>
                  </el-form-item>

                  <el-form-item label="性别" prop="gender">
                    <el-select v-model="form.gender" placeholder="请选择性别">
                    <el-option label="男" value="男"></el-option>
                    <el-option label="女" value="女"></el-option>
                  </el-select>
                  </el-form-item>
                  

                  <el-form-item label="注册日期" prop="date">                  
                      <el-date-picker value-format="yyyy-MM-DD" type="date" placeholder="选择日期" v-model="form.date" style="width: 204px;"></el-date-picker>                        
                  </el-form-item>


                  <el-form-item label="手机号" prop="phonenumber">
                    <el-input v-model="form.phonenumber" placeholder="请输入员工手机号"></el-input>
                  </el-form-item>
                  <el-form-item label="电子邮箱" prop="email">
                    <el-input v-model="form.email" placeholder="请输入员工电子邮箱"></el-input>
                  </el-form-item>
                   <el-form-item label="等级" prop="grade">
                    <el-select v-model="form.grade" placeholder="请选择等级">
                    <el-option label="超级管理员" value="supermanager"></el-option>
                    <el-option label="一般管理员" value="generalmanager"></el-option>
                  </el-select>
                  </el-form-item>
                </el-form>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="cancle">取 消</el-button>
                    <el-button type="primary" @click="submit">确 定</el-button>
                  </span>
        </el-dialog>
        <div class="manage-header gonnengqu">
          <el-button type="primary" @click="addNewUser()">
            +新增 
          </el-button> 
          <!-- 搜索区域                -->
          <el-form :model="userform" :inline="true">
            
               
                   <el-form-item>
                    <el-input placeholder="请输入姓名查找" v-model="userform.name"></el-input>
                   </el-form-item>
                   <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                   </el-form-item>
          </el-form>
        </div>
        <el-table
                    height="820"
                    :data="tableData"
                    stripe
                    style="width: 100%">
                    <el-table-column
                    v-for="(val,key) in tableLabel"
                    :key="key"
                      :prop="key"
                      :label="val"
                      width="180">
                    </el-table-column>
                    <el-table-column
                    prop="key"
                    label="操作处理">
                    <template scope="scope">
                      <el-button type="info" size="mini" @click="handleEdit(scope.row)">编辑</el-button>
                      <el-button type="danger" size="mini" @click="handleDelete(scope.row)">删除</el-button>
                    </template>
                    </el-table-column>
                  </el-table>
  </div>
</template>

<script>

import {getothersuserData,addothersuserData,editothersuserData,deleteothersuserData} from "@/api/index"
export default {
data(){
    return{
      userform:{name:''},
      modalType:0,//0:新增 1：编辑
      tableData:[],//一般管理员列表
      tableLabel:{id:"员工号",name:"姓名",date:"注册日期",gender:"性别",phonenumber:"电话号码",email:"邮箱",grade:"级别",password:"密码"},
       dialogVisible: false,
       form:{
        id:'',
        date:'',
        name:'',
        gender:'',
        phonenumber:'',
        email:'',
        grade:'',
        password:''
       },
     rules:{id:[{ required: true, message: '请输入员工编号', trigger: 'blur' }],name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 100, message: '长度在 3 到 100个字符', trigger: 'blur' }
          ],
          date: [
            {required: true, message: '请选择日期', trigger: 'change' }
          ],
          email:[{ required: true, message: '请输入邮箱地址', trigger: 'blur' },{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }]
          ,phonenumber:[ { required: true, message: "请输入手机号", trigger: "blur" },{ pattern:/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/, message: "请输入合法手机号/电话号", trigger: "blur" }]
          ,password:[{required:true,message:"请输入登入密码",trigger:"blur"}]
          ,gender:[{required:true,message:"请选择性别",trigger:"blur"}]
          ,grade:[{required:true,message:"请选择级别",trigger:"blur"}]
          }
          
    }
   },
       methods: {
        //列表搜索条件
        onSubmit(){
                this.getUserList()
        }
        ,
        addNewUser(){
          this.modalType=0
          this.dialogVisible=true
        },
      handleClose(done) { 
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      submit(){
        this.$refs.form.validate((valid)=>{   
          console.log(this.form,'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh')          
          if(valid){
            //关闭对话框
            if(this.modalType===0){
             console.log("添加管理员")
              addothersuserData(this.form).then(()=>{this.getUserList()})
              
            }else{
              editothersuserData(this.form).then(()=>{this.getUserList()})
            }
              
              this.$refs.form.resetFields()
               this.dialogVisible=false
              
          }
        })
      },
      //弹窗关闭的时候
      handleClose(){
          this.$refs.form.resetFields()
          this.dialogVisible=false
          
      },cancle(){
        this.handleClose()
      },
      handleEdit(data){
        // console.log("看看编辑时候当前行数据数据：",data)
              this.modalType=1
              this.dialogVisible=true
              //对于当前数据进行深拷贝
              this.form=JSON.parse(JSON.stringify(data))

      },handleDelete(data){
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                deleteothersuserData({id:data.id}).then(()=>{
                    this.$message({                 
                  type: 'success',
                  message: '删除成功!'
                });
                this.getUserList();
                })
              
              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消删除'
                });          
              });

      },
      getUserList(){
           getothersuserData({params:{...this.userform}}).then(({data})=>{
          console.log(data)
          this.tableData=data.data
          console.log(data.data)
        })
      },



    },
    mounted(){
       this.getUserList()
       
    },
   
}
</script>

<style>
.manage{
  height:90%;
  
}
.gonnengqu{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>