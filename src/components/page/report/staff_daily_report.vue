<template> 
  <div>
    <div class="report-form">
      <span class="form_title"> {{username}}的日报 </span>
      <el-form :model="reportForm1" ref="reportForm1" label-width="100px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="reportForm1.name" type="text" placeholder="请输入姓名" disabled>
          </el-input>
        </el-form-item>

        <el-form-item label="日期" prop="date">
          <el-date-picker v-model="reportForm1.date" type="date" placeholder="选择日期" readonly>
          </el-date-picker>
        </el-form-item>
        <el-form-item label="工作内容" prop="content">
          <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="reportForm1.content" disabled>
          </el-input>
        </el-form-item>
        <el-form-item v-show="false">
          <el-button type="primary" @click="submitForm('reportForm1')">提交</el-button>
          <el-button @click="resetForm('reportForm1')">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
   
  </div> 
</template>
<script>
  export default {
    data() {
      return { 
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
    created: function () {
      this.username = 'test',
      this.reportForm1.name = this.username; 
    }

  }

</script>
<style lang="">
  .report-form { 
    width: 50%;
  }

  .form_title {
    display: block;
    padding: 20px;
    margin-left: 40px;
    color: #878d99;
  }

</style>
