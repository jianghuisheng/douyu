<template>
  <div class="kind-page">
    <ul class="box">
      <li class="current">全部</li>
      <li v-for="cate in cates">
        <a href="">{{ cate.cate1Name }}</a>
      </li>
    </ul>
    <ul class="container">
      <li v-for="item in show">
        <img :src="item.icon" alt="">
        <p>{{ item.cate2Name }}</p>
      </li>
    </ul>


  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data: function () {
      return {
        cates:[],
        show:[]
      }
    },
    //https://m.douyu.com/api/cate/list?type=
    mounted(){
      axios.get('/second/api/cate/list').then(val=>{
        console.log(val.data.data.cate1Info)
        this.cates=val.data.data.cate1Info
        this.show=val.data.data.cate2Info
      }).catch(err=>{
        console.log(err)
      })
    },
  }
</script>

<style scoped>
  .kind-page .box{
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
    height: 25px;
    width: 100%;
  }
  .kind-page .box li{
    margin: 0 10px;
    display: inline-block;
  }
  .current{
    border-bottom:2px solid #ff5d23;
    color: #ff5d23;
    font-weight: bold;
  }
  .container{
    height: 305px;
    overflow: hidden;
    margin-top: 10px;
    background: #f5f5f5;
    overflow: scroll;
  }
  .container li{
    float: left;
    width: 33.3%;
    padding-top: 20px;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;

  }
  .container li img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: block;
    margin-bottom: 5px;
    margin-left: 25px;
  }
  .container li:nth-child(3n){
    border-right:none;
  }
  .container p{
    text-align: center;
    height: 25px;
    overflow: hidden;
    font-size: 12px;
  }

</style>


