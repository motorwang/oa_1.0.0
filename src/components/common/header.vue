<template>
        <div class="header">
           <div class="logo" ></div>
           <div class="title">中科融信信息化管理平台</div>
           <div class="user-info">
              欢迎您:{{staffname}}!
           </div>
       </div>
</template>
<script>
     export default {
        data() {
            return {
                name: "test",
               staffname: this.commonData.loginInfo.userName
            }

        },
        computed:{
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
        methods:{
            handleCommand(command) {
                if(command == 'loginout'){
                    localStorage.removeItem('ms_username')
                    this.$router.push('/login');
                }
            }
        }
    }
</script>
<style>
     .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 80px;
        font-size: 22px;
        line-height: 80px;
        color: #fff;
        background-color:lightblue;
    }
    .header .logo{
        background: url("../../assets/channalst.png") no-repeat 10px;
        height: inherit;
        float: left;
        width:250px;
        margin-left: 30px;
        text-align: center;
    }
    .header .title{
      margin-left: 100px;
      float: left;
      text-align: center;
      height: inherit;
      width: 400px;
    }
    .header .user-info {
        float: right;
        margin-right: 50px;
        font-size: 20px;
        font-family: "Microsoft YaHei";
        color:black;
        width: 200px;
       text-align: right;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }
    .user-info .user-logo{
        position: absolute;
        left:0;
        top:15px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>
