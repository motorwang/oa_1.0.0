<template>
<div>
  <div class="block">
    <el-date-picker v-model="times" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" format="yyyy-MM-dd"
      value-format="yyyy-MM-dd">
    </el-date-picker>
    <el-button type="primary" @click="search()">查询</el-button>
  </div>

  <el-table :data="tableData" border style="width: 601px">
    <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
    
    <el-table-column prop="arriveTime" label="到达时间" width="150"></el-table-column>
    
    <el-table-column prop="leaveTime" label="离开时间" width="150"></el-table-column>
    
    <el-table-column label="描述" width="150">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.$index, scope.row)" type="text" size="small">迟到</el-button>
      </template>
    </el-table-column>
  </el-table>

    <!-- 本月考勤统计 -->
    <p class="total">本月出勤统计如下：</p>
    <el-table :data="tableData3" border style="width: 601px">
      <el-table-column prop="late" label="迟到(次)" width="150"></el-table-column>
      <el-table-column prop="early" label="早退(次)" width="150"></el-table-column>
      <el-table-column  prop="leave" label="请假(次)"  width="150"></el-table-column>
      <el-table-column  prop="absenteeism" label="旷工(次)"  width="150"></el-table-column>
    </el-table>

  <!-- 模态框 -->
  <el-dialog title="补签" :visible.sync="dialogTableVisible" width="35%">
    <el-form :model="form">
     <el-form-item label="开始时间" left :label-width="formLabelWidth">
        <el-date-picker v-model="form.startTime" type="datetime" placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="结束时间" :label-width="formLabelWidth">
        <el-date-picker v-model="form.endTime" type="datetime" placeholder="选择日期">
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
    var datas = [
      {
        date: "2017-10-03",
        arriveTime: "09:20",
        leaveTime: "18:00",
        desc: "迟到"
      },
      {
        date: "2017-10-03",
        arriveTime: "08:50",
        leaveTime: "18:00",
        desc: ""
      },
      {
        date: "2017-10-03",
        arriveTime: "09:00",
        leaveTime: "19:00",
        desc: "早退"
      }
    ];
    return {
      tableData: datas,
      times: "",
      tableData1: datas,
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
  methods: {
    handleClick(index, row) {
      var date = row.date;
      var startTime = Date.parse(row.date) + 3600 * 1000 * 1;
      var endTime = Date.parse(row.date) + 3600 * 1000 * 10;
      this.form.startTime = new Date(startTime);
      this.form.endTime = new Date(endTime);
      this.form.RstartTime = new Date(startTime);
      this.form.RendTime = new Date(endTime);

      this.dialogTableVisible = true;
      this.form.row = row;
      this.form.index = index;
      //this.editForm = Object.assign({}, row);
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
        //this.tableData[this.form.index] = temp;
        //this.tableData1[this.form.index] = temp;
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
    search() {
      console.log(this.times);
      var self = this;
      if (self.times != null && self.times.length == 2) {
        self.tableData = self.tableData1;
        self.tableData = self.tableData.filter(function(item) {
          var currentTime = Date.parse(item.date);
          var startTime = Date.parse(self.times[0]);
          var endTime = Date.parse(self.times[1]);
          return currentTime >= startTime && currentTime <= endTime;
        });
      } else {
        self.tableData = self.tableData1;
      }
      console.log(self.tableData);
    }
  }
};
</script>

<style scoped>
.block {
  margin: 20px 0;
}
.total {
  font-size: 15px;
  margin-top: 20px;
  margin-bottom: 5px;
  color: #878d99;
}
.el-dialog__body {
  padding-bottom: 0px;
}
</style>