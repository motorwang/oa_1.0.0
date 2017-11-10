<template>
<div>
  <p class="record"><span class="name">{{userName}}</span>本月考勤记录：</p>
  <el-table :data="tableData" border style="width: 721px">
    <el-table-column fixed prop="date" label="日期" width="180"></el-table-column>
    
    <el-table-column prop="arriveTime" label="到达时间" width="180"></el-table-column>
    
    <el-table-column prop="leaveTime" label="离开时间" width="180"></el-table-column>
    
    <el-table-column label="描述" width="180">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.$index, scope.row)" type="text" size="small">{{scope.row.desc}}</el-button>
      </template>
    </el-table-column>
  </el-table>

    <!-- 本月考勤统计 -->
    <p class="total"><span class="name">{{userName}}</span>本月出勤统计：</p>
    <el-table :data="tableData3" border style="width: 601px">
      <el-table-column prop="late" label="迟到(次)" width="150"></el-table-column>
      <el-table-column prop="early" label="早退(次)" width="150"></el-table-column>
      <el-table-column  prop="leave" label="请假(次)"  width="150"></el-table-column>
      <el-table-column  prop="absenteeism" label="旷工(次)"  width="150"></el-table-column>
    </el-table>

  <!-- 模态框 -->
  <el-dialog title="补签" :visible.sync="dialogTableVisible" min-width="35%">
    <el-form :model="form">
     <el-form-item label="开始时间" left :label-width="formLabelWidth">
        <el-date-picker v-model="form.startTime" type="datetime" placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="结束时间" :label-width="formLabelWidth">
        <el-date-picker disabled class="endTime" v-model="form.endTime" type="datetime" placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="补签说明: ">
        <el-input v-model="form.reason" placeholder="x年x月x日忘记打卡"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="closeDialog(false)">取 消</el-button>
      <el-button type="primary" @click="submitDialog">确 定</el-button>
    </div>
  </el-dialog>
</div>

</template>

<script>
export default {
  data() {
    return {
      userName: '',  // 用户姓名
      tableData: [],    // 本月每天考勤记录
      dialogTableVisible: false,
      form: {
        startTime: "",
        endTime: "",
        index: "",
        RstartTime: "",
        RendTime: "",
        reason: ""
      },
      formLabelWidth: "80px",
      tableData3: [
        {
          late: "0",
          early: "0",
          leave: "0",
          absenteeism: "0"
        }
      ]
    };
  },
  created() {
    // 页面加载, 发起请求
    var url = "http://10.130.227.31:3000/api/user2";   // 测试地址
      this.$axios.post(url)
        .then(res => {
          this.userName = res.data.userName;
          this.tableData = res.data.data;
          for (var i = 0; i < res.data.data.length; i++) {
            var temp = res.data.data[i];
            if(temp.desc == 0) {
              res.data.data[i].desc = "";
            }
            if(temp.desc == 1) {
              res.data.data[i].desc = "迟到";
            }
            if(temp.desc == 2) {
              res.data.data[i].desc = "早退";
            }
            if(temp.desc == 5 || temp.desc == 6) {
              res.data.data[i].desc = "休息";
            }
          }
      })
        .catch(err => {
        console.log(err);
      })
  },
  methods: {
    handleClick(index, row) {
      var date = row.date;
      var startTime = this.form.startTime = row.date + " " + row.arriveTime;
      // var startTime = Date.parse(row.date) + 3600 * 1000 * 1;
      var endTime = Date.parse(row.date) + 3600 * 1000 * 10;
      this.form.startTime = new Date(startTime);
      this.form.endTime = new Date(endTime);
      this.form.RstartTime = new Date(startTime);
      this.form.RendTime = new Date(endTime);

      this.dialogTableVisible = true;
      this.form.row = row;
      this.form.index = index;
    },
    closeDialog(result) {
      if (result) {
        //todo 更改数据
        var temp = this.tableData[this.form.index];
        var date = new Date(this.form.endTime);
        var dd = date.getDate();
        if (dd < 10) dd = "0" + dd;
        console.log(dd);
        temp.date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + dd;
        var count = 0;
        if (this.form.endTime == this.form.RendTime || this.form.startTime == this.form.RstartTime) {
          count++;
        } else {
          console.log(false);
        }
        console.log(count);
        this.dialogTableVisible = false;
      } else {
        this.dialogTableVisible = false;
      }
    },
    // 补签提交
    submitDialog() {
      let url = '';
      this.$axios.post(url)
      .then(res => {
        // this.arriveTime = res.data.xxxx;  // 修改到达时间
        // this.leadveTime = res.data.xxx;   // 修改离开时间
        console.log('开始请求');
      })
      .catch( err => {
        console.log(err);
      })
      this.dialogTableVisible = false;
      this.$message({
        message: "提交成功!",
        type: 'success'
      });
    },
  }
};
</script>

<style scoped>
.name {
  color: #409eff; 
  margin-right: 5px;
  font-size: 18px;
  font-weight: 
}
.record {
  margin: 30px 0 5px 5px;
  color: #878d99;
  font-size: 16px;
}
.total {
  font-size: 16px;
  margin: 35px 0 5px 5px;
  color: #878d99;
}
.dialog-footer {
  margin-top: -40px;
}
</style>