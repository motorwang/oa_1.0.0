<template>
    <div>
        <p class="total">产品开发部 本月考勤统计：</p>
        <el-table :data="department" border style="width: 1201px" @row-click="rowClick()">
            <el-table-column prop="name" label="姓名" width="100"></el-table-column>
            <el-table-column prop="depart" label="二级部门" width="150"></el-table-column>
            <el-table-column prop="position" label="职位" width="150"></el-table-column>
            <el-table-column prop="late" label="迟到" width="80"></el-table-column>
            <el-table-column prop="early" label="早退" width="80"></el-table-column>
            <el-table-column prop="absenteeism" label="旷工" width="80"></el-table-column>
            <el-table-column prop="marry" label="婚假" width="80"></el-table-column>
            <el-table-column prop="affair" label="事假" width="80"></el-table-column>
            <el-table-column prop="year" label="年假" width="80"></el-table-column>
            <el-table-column prop="rest" label="调休" width="80"></el-table-column>
            <el-table-column prop="ill" label="病假" width="80"></el-table-column>
            <el-table-column prop="maternity" label="产假" width="80"></el-table-column>
            <el-table-column prop="trip" label="出差" width="80"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        // var arr = [
        //     {
        //         name: '小明',
        //         depart: '营销部',
        //         position:'普通职员',
        //         late: '0',  // 迟到
        //         early: '0',  // 早退
        //         absenteeism: '0',  //旷工
        //         marry: '0',  // 婚假
        //         affair: '0',  // 事假
        //         year: '0',  // 年假 
        //         rest: '0', // 调休
        //         ill: '0',  // 病假
        //         maternity: '0',  // 产假
        //         trip: '0',  // 出差
        //     },
        //     {
        //         name: '小红',
        //         depart: '营销部',
        //         position:'普通职员',
        //         late: '0',  
        //         early: '0',  
        //         absenteeism: '0',  
        //         marry: '0',  
        //         affair: '0',  
        //         year: '0',  
        //         rest: '0', 
        //         ill: '0',  
        //         maternity: '0',  
        //         trip: '0',  
        //     },
        //     {
        //         name: '小李',
        //         depart: '营销部',
        //         position:'普通职员',
        //         late: '0',  
        //         early: '0',  
        //         absenteeism: '0',  
        //         marry: '0',  
        //         affair: '0',  
        //         year: '0',  
        //         rest: '0', 
        //         ill: '0',  
        //         maternity: '0',  
        //         trip: '0',  
        //     },
        // ];
        return {
            department: [],
        }
    },
    created() {
        this.$axios.get()
        .then(res => {
            // 请求成功
            // this.department = res.data.xxx;
        })
        .catch(err => {
            console.log("请求失败!");
            this.department = [
                {
                name: 'test',
                depart: '产品开发部',
                position:'普通职员',
                late: '1',  
                early: '0',  
                absenteeism: '0',  
                marry: '0',  
                affair: '1',  
                year: '0',  
                rest: '1', 
                ill: '0',  
                maternity: '0',  
                trip: '5',  
            }]
            
        })
    },
    methods: {
        rowClick() {
            this.$router.push({
                path: '/detail'
            });
        }
    }
};
</script>

<style scoped>
    .total {
        margin: 20px 0 10px 5px;
        color: #666;
    }
</style>
