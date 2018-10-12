<template>
  <div class="second-page">
    <header-top></header-top>
    <p class="text">
      <i class="fa fa-caret-square-o-right"></i>&nbsp;
      <span v-for="data in datas" v-if="type==data.shortName">{{data.cate2Name}}</span>
    </p>
    <ul>
      <li v-for="list in lists">
        <img :src="list.roomSrc" alt="">
        <p>{{ list.roomName }}</p>
      </li>
    </ul>
    <div @click="loadMore" class="more">
      点击加载更多
    </div>
  </div>
</template>

<script>
  import HeaderTop from '../components/HeaderTop'
  import axios from 'axios'
  //https://m.douyu.com/api/room/list?page=1&type=jdqscjzc
  //https://m.douyu.com/api/room/list?page=2&type=jdqscjzc
  //https://m.douyu.com/api/room/list?page=1&type=LOL
  //https://m.douyu.com/api/cate/list?type=
  export default {
    data: function () {
      return {
        lists:[],
        count:2,
        type:this.$route.params.id,
        datas:[]
      }
    },
    components:{
      HeaderTop
    },
    created(){
      this.firstGet();
    },
    mounted(){
      axios.get('/second/api/cate/list',{

      }).then(val=>{
        // console.log(val.data.data.cate2Info)
        this.datas=val.data.data.cate2Info
      }).catch(err=>{
        console.log(err)
      })
    },
    methods:{
      firstGet:function () {
        axios.get('/second/api/room/list',{
          params:{
            page:this.count-1,
            type:this.type
          }
        }).then(val=>{
          // console.log(val.data.data);
          // console.log(this.type)
          this.lists=val.data.data.list
        }).catch(err=>{
          // console.log(err)
        })
      },
      loadMore() {
        console.log('加载了');
        axios.get('/second/api/room/list',{
          params:{
            page:this.count++,
            type:this.type
          }
        }).then(val=>{
          // console.log(val.data.data.list);
          this.lists=this.lists.concat(val.data.data.list)
        }).catch((err)=>{
          // console.log(err)
        })
      }
    },
  }
</script>

<style scoped>
  .second-page{
    padding: 10px 10px;
  }
  .second-page .text{
    margin: 5px 5px;
  }
  .second-page .text span{
    left: 40px;
    top: 56px;
    position: absolute;
  }
  .second-page .text i{
    float: left;
    color:#ff5d23;
  }
  .second-page ul{
    overflow: hidden;
  }
  .second-page ul li{
    width: 140px;
    /*display: inline-block;*/
    float: left;
    margin: 0px 5px;
  }
  .second-page ul li img{
    width: 140px;
    height: 100px;
    border-radius: 3px;
  }
  .second-page ul li p{
    height: 50px;
    text-align: left;
    font-size: 12px;
    height: 18px;
    overflow: hidden;
    margin-left: 5px;
  }
  .second-page .more{
    height: 41px;
    line-height: 41px;
    text-align: center;
    border: 1px solid #ddd;
    font-size: 14px;
    color: #7a7a7a;
    border-radius: 5px;
    margin: 5px;
    cursor: pointer;
  }
</style>


