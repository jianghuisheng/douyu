<template>
  <div class="block">
    <el-carousel trigger="click" height="210px">
      <el-carousel-item v-for="img in images" :key="img">
        <img :src="img" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

    export default {
        data: function () {
            return {
              images:["https://gfs-op.douyucdn.cn/slide/2018/09/20/1aec8723e5c88786b7fa3725caa6f63b.jpg","https://gfs-op.douyucdn.cn/slide/2018/09/28/891ab306eec6a46268a645bcb3c58f81.jpg","https://gfs-op.douyucdn.cn/slide/2018/09/28/13853a02731367beb1a13ff1ddc8ba11.jpg","https://cs-op.douyucdn.cn/douyu-vrp-admin/2018/08/07/75de65a9fea6573ad5c19c25daea205e.jpg"]
            }
        },
        components: {},
    }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>


