<template>
<div>
  <div class="back">
    <el-button type="info" size="small" @click="back">返 回</el-button>
  </div>
  <p class="record">test 上月考勤记录：</p>
  <el-table :data="tableData" border style="width: 721px">
    <el-table-column fixed prop="date" label="日期" width="180"></el-table-column>
    
    <el-table-column prop="arriveTime" label="到达时间" width="180"></el-table-column>
    
    <el-table-column prop="leaveTime" label="离开时间" width="180"></el-table-column>
    
    <el-table-column prop="desc" label="描述" width="180"></el-table-column>

  </el-table>

    <!-- 本月考勤统计 -->
    <p class="total">test 上月出勤统计：</p>
    <el-table :data="tableData3" border style="width: 601px">
      <el-table-column prop="late" label="迟到(次)" width="150"></el-table-column>
      <el-table-column prop="early" label="早退(次)" width="150"></el-table-column>
      <el-table-column  prop="leave" label="请假(次)"  width="150"></el-table-column>
      <el-table-column  prop="absenteeism" label="旷工(次)"  width="150"></el-table-column>
    </el-table>
</div>

</template>

<script>
export default {
  data() {
    var datas = [
      {
        date: "2017-11-03",
        arriveTime: "09:20",
        leaveTime: "18:00",
        desc: "迟到"
      },
      {
        date: "2017-11-04",
        arriveTime: "08:50",
        leaveTime: "18:00",
        desc: ""
      },
      {
        date: "2017-11-05",
        arriveTime: "09:00",
        leaveTime: "19:00",
        desc: "早退"
      }
    ];
    return {
      tableData: datas,
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
          late: "1",
          early: "1",
          leave: "0",
          absenteeism: "0"
        }
      ]
    };
  },
  methods: {
    // 返回
    back() {
      this.$router.push("/departLast");
    },
    created() {
      // 页面加载, 发起请求
    }
  }
};
</script>

<style scoped>
.back {
  overflow: hidden;
}
.back button {
  float: right;
  margin-right: 50px;
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