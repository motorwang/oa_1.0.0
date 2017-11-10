<template>
<div>
  <div>  
   <span class="table_title"> 部门周报 </span>
     <el-table :data="tableData" border >
    <el-table-column  label="员工">
    <template slot-scope="scope">
        <el-button @click="handleClick(scope.$index,scope.row)" type="text" size="small" >{{ scope.row.staff }}</el-button>
      </template>
    </el-table-column>
    <el-table-column prop="department1" label="一级部门" >
    </el-table-column>
    <el-table-column prop="department2" label="二级部门">
    </el-table-column>
    <el-table-column prop="duty" label="职位" >
    </el-table-column> 
   <el-table-column prop="score" label="自评分" >
    </el-table-column> 
  </el-table> 
  </div>
    
</div>
</template>
<script>
  export default {
   data(){
     return {
      tableData:[{
         staff:'测试1',
         department1:'测试一级部门',
         department2:'测试二级部门',
         duty:'软件工程师',
         score:'9'
       },{
         staff:'测试2',
         department1:'测试一级部门',
         department2:'测试二级部门',
         duty:'软件工程师',
         score:'9'
       },{
         staff:'测试3',
         department1:'测试一级部门',
         department2:'测试二级部门',
         duty:'软件工程师',
         score:'7'
       },{
         staff:'测试4',
         department1:'测试一级部门',
         department2:'测试二级部门',
         duty:'软件工程师',
         score:'9'
       }]
     }
   },
   methods:{
        handleClick:function(){
        this.$router.push('/staffweekly');
      }
   }
  } 
</script>
<style>
    .table_title {
    display: block;
    padding: 20px 0; 
    color: #878d99;
  }
</style>