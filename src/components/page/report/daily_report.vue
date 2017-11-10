<template>
 
  <el-row :gutter="20" > 
    <div class="divLine"></div>
    <el-col :span="12">
      <div>
        <span class="form_title"> {{userName}}的日报 <i>({{date}})</i></span>
        <el-form :model="reportForm" :rules="reportRules" ref="reportForm" label-width="100px">
  
          <el-form-item label="姓名" prop="name">
            <el-input v-model="reportForm.name" type="text" placeholder="请输入姓名">
            </el-input>
          </el-form-item>
  
          <el-form-item label="日期" prop="date">
            <el-date-picker v-model="reportForm.date" type="date" placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
  
          <el-form-item label="工作完成情况">
            <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="reportForm.content">
            </el-input>
          </el-form-item>
          
          <el-form-item label="明日工作计划" prop="plan">
            <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="reportForm.plan">
            </el-input>
          </el-form-item>

            <el-form-item label="今日完成(%)" prop="complete">
            <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="reportForm.complete">
            </el-input>
          </el-form-item>

          </el-form-item>
            <el-form-item label="其他" prop="other">
            <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="reportForm.other">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('reportForm')">提交</el-button>
            <el-button @click="resetForm('reportForm')">取消</el-button>
          </el-form-item>
        </el-form> 
      </div>
    </el-col> 
    <el-col :span="12">
      <div>
        <span class="form_title"> {{userName}}的日报 <i>({{date1}})</i> </span>
        <el-form :model="reportForm1" ref="reportForm1" label-width="100px">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="reportForm1.name" type="text" placeholder="请输入姓名" disabled>
            </el-input>
          </el-form-item>
  
          <el-form-item label="日期" prop="date">
            <el-date-picker v-model="reportForm1.date" type="date" placeholder="选择日期" readonly>
            </el-date-picker>
          </el-form-item>
 
           <el-form-item label="工作完成情况">
            <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="reportForm.content" disabled>
            </el-input>
          </el-form-item>
          
          <el-form-item label="明日工作计划" prop="plan">
            <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="reportForm.plan" disabled>
            </el-input>
          </el-form-item>

            <el-form-item label="今日完成(%)" prop="complete">
            <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="reportForm.complete" disabled>
            </el-input>
          </el-form-item>

          </el-form-item>
            <el-form-item label="其他" prop="other">
            <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="reportForm.other" disabled>
            </el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        reportForm: {
          date: new Date(),
          name: '',
          content: '',
          plan:'',
          other:'',
          complete:''
        },
        userName: this.commonData.loginInfo.userName,
        date: '',
        reportRules: {
          date: [{
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }],
          content: [{
            required: true,
            message: '请填写工作内容',
            trigger: 'blur'
          }],
          name: [{
            required: true,
            message: '请填姓名',
            trigger: 'blur'
          }]
        },
        username: '',
        reportForm1: {
          name: '',
          date: '',
          content: ''
        },
  
  
      }
    },
    methods: {
      submitForm(formName) {
        var self = this;
        self.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('OK submit!!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    created: function() {
      this.username = this.commonData.loginInfo.userName;
      this.date = '2017-11-10';
      this.date1 = '2017-11-09';
      this.reportForm1.name = this.username;
      this.reportForm.name = this.username;
    }
  
  }
</script>

<style lang="">
 .content{
   height:100%;
 }
 .divLine{
position: absolute;
width: 2px;
background-color: #ebebeb;
left: 50.5%;
z-index: 2;
display: ruby-base;
height: 105%;
margin: 20px 0;
 }
  .form_title {
    display: block;
    padding: 20px;
    margin-left: 40px;
    color: #878d99;
  }
</style>
