
<template>
  <div class="header-nav">
    <el-row>
      <!--1-->
      <el-col :span="4">
        <div>
          <span class="current">推荐</span>
        </div>
      </el-col>
      <!--2-->
      <el-col :span="18">
        <div>
          <ul class="nav-choose">
            <li v-for="title in titles">
              <!--https://m.douyu.com/list/room?type=jdqscjzc-->
              <!--https://m.douyu.com/list/room?type=LOL-->
              <router-link :to="'/router/'+title.shortName">{{ title.name }}</router-link>
            </li>
          </ul>
        </div>
      </el-col>
      <!--弹出框-->
      <el-col :span="2">
        <div>
          <!--<a href="#/"><i class="fa fa-bars"></i></a>-->
          <el-button type="text" @click="dialogVisible = true"><i class="fa fa-bars"></i></el-button>
          <el-dialog  title="选择分类":visible.sync="dialogVisible" width="100%" height="400vh" top="0vh">
            <kind-page></kind-page>
          </el-dialog>

        </div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
  import axios from 'axios';
  import KindPage from './KindPage'
  export default {
    data: function () {
      return {
        titles:[],
        dialogVisible: false
      }
    },
    components:{
      KindPage
    },
    mounted() {
      axios.get('/second/api/cate/recList').then(val => {
        console.log(val.data.data);
        this.titles = val.data.data
      }).catch(err => {
        console.log(err)
      })
    }
  }
  //https://m.douyu.com/api/cate/recList?cid=&ct=
  //https://m.douyu.com/api/room/list?page=1&type=jdqscjzc
  //https://m.douyu.com/api/room/list?page=2&type=jdqscjzc
  //https://m.douyu.com/api/room/list?page=1&type=LOL
</script>

<style scoped>
  .nav-choose{
    overflow: hidden;
    width: 100%;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
  }
  .nav-choose li{
    display: inline-block;
    margin: 0 5px;
  }
  .nav-choose li router-link{
    font-size: 14px;

  }

  .header-nav .current{
    border-bottom:2px solid #ff5d23;
    color: #ff5d23;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
  }
  .el-row {
    margin-top: 10px;
    margin-bottom: 10px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {

    min-height: 20px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-button--text {
    color: #444;
    margin-top: -10px;
  }

</style>


