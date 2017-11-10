<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes"  unique-opened router>

            <el-submenu index="1" >
               <template slot="title"><i class="el-icon-menu"></i>工作日志</template>
               <el-menu-item index="daily">日报</el-menu-item>
               <el-menu-item index="weekly">周报</el-menu-item>
               <el-menu-item index="dailylist">部门日报</el-menu-item>
               <el-menu-item index="weeklylist">部门周报</el-menu-item>
            </el-submenu>

            <el-submenu index="2" >
               <template slot="title"><i class="el-icon-date"></i>人力相关</template>
               <el-menu-item index="thisMouth">本月考勤</el-menu-item>
               <el-menu-item index="lastMouth">上月考勤</el-menu-item>
               <el-menu-item index="department">部门本月考勤</el-menu-item>
               <el-menu-item index="departLast">部门上月考勤</el-menu-item>
           </el-submenu>

          <el-submenu index="3" >
            <template slot="title"><i class="el-icon-date"></i>审批相关</template>
            <el-menu-item index="error">已发起审批</el-menu-item>
            <el-menu-item index="22">待审批</el-menu-item>
          </el-submenu>

          <el-submenu index="4" >
            <template slot="title"><i class="el-icon-date"></i>知识库</template>
            <el-menu-item index="error">test</el-menu-item>
          </el-submenu>

        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        computed:{
            onRoutes(){
                // console.log(this.$route.path);
                // return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
