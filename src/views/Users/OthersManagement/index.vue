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
                    <el-option label="男" value="male"></el-option>
                    <el-option label="女" value="female"></el-option>
                  </el-select>
                  </el-form-item>
                  

                  <el-form-item label="注册日期" prop="date">                  
                      <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 204px;"></el-date-picker>                        
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
        <div class="manage-header">
          <el-button type="primary" @click="addNewUser()">
            +新增 
          </el-button>
                  <el-table
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
  </div>
</template>

<script>

import {getothersuserData,addothersuserData,editothersuserData} from "@/api/index"
export default {
data(){
    return{
      modalType:0,//0:新增 1：编辑
      tableData:[],
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
            { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
          ],date: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],email:[{ required: true, message: '请输入邮箱地址', trigger: 'blur' },{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }]
          ,phonenumber:[ { required: true, message: "请输入手机号", trigger: "blur" },{ pattern:/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/, message: "请输入合法手机号/电话号", trigger: "blur" }]
          ,password:[{required:true,message:"请输入登入密码",trigger:"blur"}]
          ,gender:[{required:true,message:"请选择性别",trigger:"blur"}]
          ,grade:[{required:true,message:"请选择级别",trigger:"blur"}]
          }
          
    }
   },
       methods: {
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
              this.modalType=1
              this.dialogVisible=true
              this.form=JSON.parse(JSON.stringify(row))

      },handleDelete(data){


      },
      getUserList(){
                   getothersuserData().then(({data})=>{
          console.log(data)
          this.tableData=data.data
          console.log(data.data)
        })
      }


    },
    mounted(){
       this.getUserList()
       
    },
   
}
</script>

<style>

</style>