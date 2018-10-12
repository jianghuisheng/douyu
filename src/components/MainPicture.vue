<template>
    <div class="main-picture">
      <ul>
        <li v-for="pic in title.rl">
          <img :src="pic.rs16" alt="">
          <p>{{pic.rn}}</p>
        </li>
      </ul>
    </div>
</template>

<script>

    export default {
        data: function () {
            return {

            }
        },
        components: {},
        props:['title']
    }
</script>

<style scoped>
  li{
    width: 48vw;
    display: inline-block;
    overflow: hidden;
  }
  .main-picture  img{
    width: 150px;
    height: 100px;
    float: left;
    margin: 0 5px 0px 5px;
    border-radius: 3px;
  }
  .main-picture p{
    margin-top: 105px;
    height: 50px;
    text-align: left;
    font-size: 12px;
    height: 18px;
    overflow: hidden;
    margin-left: 5px;
  }
</style>


