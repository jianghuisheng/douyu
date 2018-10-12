<template>
    <div class="nav-top">
      <img src="../assets/logo864f3e.png" alt="">
      <span class="open">打开App</span>
      <span class="chongzhi">充值</span>
      <span><i class="fa fa-search"></i></span>
    </div>
</template>

<script>

    export default {
        data: function () {
            return {}
        },
        components: {},
    }
</script>

<style scoped>
.nav-top{
  overflow: hidden;
}
  .nav-top img{
    float: left;
    width: 76px;
    height: 34px;
    margin: 10px 0 0 10px;
  }
  .open{
    float: left;
    width: 74px;
    height: 28px;
    line-height: 28px;
    font-size: 12px;
    margin: 15px 0 0 10px;
    border-radius: 2px;
    border:1px solid #ff5d23;
    color: #ff5d23;
  }
  .chongzhi{
    float: left;
    width: 49px;
    height: 28px;
    line-height: 28px;
    border-radius: 2px;
    color: #fff;
    background-color: #ff5d23;
    margin: 15px 0 0 10px;
    font-size: 14px;
  }
  .nav-top .fa{
    float: right;
    margin: 18px 20px 0 0;
    color:#444444;
  }
</style>


