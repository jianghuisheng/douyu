<template>
  <div>
    <div v-for="title in data">
      <el-row>
        <el-col :span="16">
          <div>
            <img :src="title.icon" alt="">
            <span>
                     {{ title.cn }}
                 </span>
            <span class="sign">
                     {{title.cn}}
                  </span>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <span class="more"><i class="fa fa-chevron-circle-right"></i></span>
            <span class="more">更多</span>
          </div>
        </el-col>
      </el-row>
      <main-picture :title="title"></main-picture>
    </div>
  </div>
</template>


<script>
  import axios from 'axios'
  import MainPicture from '../components/MainPicture'
  export default {
    data: function () {
      return {
        data: []
      }
    },
    components: {
      MainPicture
    },

    //https://www.douyu.com/gapi/rkc/home/list?tdsourcetag=s_pctim_aiomsg
    mounted: function () {
      axios.get('/douyu/gapi/rkc/home/list', {
        tdsourcetag: 's_pctim_aiomsg'
      }).then((val) => {
        console.log(val.data.data.chans);
        this.data = val.data.data.chans
      }).catch((err) => {
        console.log(err)
      })
    }
  }
</script>

<style scoped>
  .el-row {
    margin-top: 10px;
    margin-bottom: 20px;
    /*&:last-child {*/
    /*margin-bottom: 0;*/
    /*}*/
  }

  .grid-content {
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
  }

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  img {
    float: left;
    width: 18px;
    height: 18px;
    margin: 0 10px 0 5px;
  }

  span {
    float: left;
    margin-right: 10px;
    font-size: 15px;
    color: #333;
  }

  .sign {
    border: 1px solid #f70;
    color: #f70;
    border-radius: 21px;
    font-size: 12px;
    padding: 3px 6px;
  }

  .more {
    font-size: 12px;
    float: right;
  }
</style>


