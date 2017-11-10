<template>
 
<el-row :gutter="20" > 
    <div class="divLine"></div>
    <el-col :span="12">
      <div> 
         <span class="form_title"> {{username}}的周报  <i>({{date}})</i></span> 
  <el-form :model="reportForm" :rules="reportRules" ref="reportForm" label-width="100px" > 
  
  <el-form-item label="姓名" prop="name">
      <el-input v-model="reportForm.name" type="text" placeholder="请输入姓名">
      </el-input>
    </el-form-item>

    <el-form-item label="日期" prop="dates">
     
     <el-date-picker v-model="reportForm.dates" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd">
    </el-date-picker>
    </el-form-item>
 
      <el-form-item label="工作完成情况">
            <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="reportForm.content" >
            </el-input>
          </el-form-item>
          
          <el-form-item label="下周工作计划" prop="plan">
            <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="reportForm.plan" >
            </el-input>
          </el-form-item>

            <el-form-item label="本周完成(%)" prop="complete">
            <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="reportForm.complete" >
            </el-input>
          </el-form-item>

          </el-form-item>
            <el-form-item label="其他" prop="other">
            <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="reportForm.other" >
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
      <span class="form_title"> {{username}}的周报  <i>({{date1}})</i></span> 
        <el-form :model="reportForm1"  ref="reportForm1" label-width="100px" >
  <el-form-item label="姓名" prop="name">
      <el-input v-model="reportForm1.name" type="text" placeholder="请输入姓名" disabled >
      </el-input>
    </el-form-item>

       <el-form-item label="日期" prop="dates">
     
     <el-date-picker v-model="reportForm1.dates" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" readonly>
    </el-date-picker>
    </el-form-item>
    <el-form-item label="工作完成情况">
            <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="reportForm.content" disabled>
            </el-input>
          </el-form-item>
          
          <el-form-item label="下周工作计划" prop="plan">
            <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="reportForm.plan" disabled>
            </el-input>
          </el-form-item>

            <el-form-item label="本周完成(%)" prop="complete">
            <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="reportForm.complete" disabled>
            </el-input>
          </el-form-item>

          </el-form-item>
            <el-form-item label="其他" prop="other">
            <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="reportForm.other" disabled>
            </el-input>
          </el-form-item>
    <el-form-item v-show="false">
      <el-button type="primary" @click="submitForm('reportForm1')">提交</el-button>
      <el-button @click="resetForm('reportForm1')">取消</el-button>
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
          dates: '',
          name:'',
          content: '', 
        },
        reportRules: {
          dates: [{
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }],
          content: [{
            required: true,
            message: '请填写工作内容',
            trigger: 'blur'
          }] ,
           name: [{
            required: true,
            message: '请填姓名',
            trigger: 'blur'
          }] 
        },
        username:'',
        reportForm1: {
          name:'',
          dates: '',
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
      created: function () {
      this.username = this.commonData.loginInfo.userName;
      this.date = '2017-11-06至2017-11-10';
      this.date1 = '2017-10-30至2017-11-03';
      this.reportForm1.name = this.username;
      this.reportForm.name = this.username;
    }
  } 
</script>
<style lang="">
  .report-form1{
    width:45%; 
    display: inline-grid;
  }
  .form_title{
    padding:20px;
    font-size:20px;
    color: #878d99;
  }
  /* 
  .form_title i{
    font-size:14px;
  }
  */
</style>