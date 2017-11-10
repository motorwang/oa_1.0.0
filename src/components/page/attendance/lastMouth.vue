<template>
<div>
  <p class="record"><span v-text="userName"></span>上月考勤记录: </p>
  <el-table :data="tableData" border style="width: 721px">
    <el-table-column fixed prop="date" label="日期" width="180"></el-table-column>
    
    <el-table-column prop="arriveTime" label="到达时间" width="180"></el-table-column>
    
    <el-table-column prop="leaveTime" label="离开时间" width="180"></el-table-column>
    
    <el-table-column prop="desc" label="描述" width="180"></el-table-column>
  </el-table>

    <!-- 本月考勤统计 -->
    <p class="total">{{userName}}上月出勤统计：</p>
    <el-table :data="tableData2" border style="width: 601px">
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
    return {
      userName: '',
      tableData: [],   //每日出勤信息

      tableData2: [
        {
          late: "0",
          early: "0",
          leave: "0",
          absenteeism: "0"
        }
      ],
    };
  },
  methods: {
  },
  created() {
    var url = "http://10.130.227.31:3000/api/users";   // 测试地址
      this.$axios.post(url)
      .then(res => {
        this.tableData = res.data.data;
        this.userName = res.data.data[0].userName

        for (var i = 0; i < res.data.data.length; i++) {
          var temp = res.data.data[i].desc;
          if(temp == 0) {
            res.data.data[i].desc = "";
          }
          if(temp == 1) {
            res.data.data[i].desc = "迟到";
          }
          if(temp == 2) {
            res.data.data[i].desc = "请假";
          }
          if(temp == 3) {
            res.data.data[i].desc = "";
          }
          if(temp == 4) {
            res.data.data[i].desc = "调休";
          }
          if(temp == 5) {
            res.data.data[i].desc = "请假";
          }
          if(temp == 6) {
            res.data.data[i].desc = "休息";
          }

        
        }
      })
      .catch( err => {
        console.log(err);
    })
  }
};
</script>

<style scoped>
.record {
  margin: 30px 0 5px 5px;
  color: #878d99;
  font-size: 16px;
}
.total {
  font-size: 16px;
  margin: 30px 0 5px 5px;
  color: #878d99;
}

.dialog-footer {
  margin-top: -40px;
}
</style>