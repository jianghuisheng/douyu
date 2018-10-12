<template>
    <div>
      <header-top></header-top>
      <header-nav></header-nav>
      <slide-show></slide-show>
      <main-page></main-page>
    </div>
</template>

<script>
  import HeaderTop from '../components/HeaderTop'
  import HeaderNav from '../components/HeaderNav'
  import SlideShow from '../components/SlideShow'
  import MainPage from '../components/MainPage'


    export default {
        data: function () {
            return {}
        },
        components: {
          HeaderTop,
          HeaderNav,
          SlideShow,
          MainPage
        },
    }
</script>

<style scoped>

</style>


