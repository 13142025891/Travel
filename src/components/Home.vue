<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from './home/header.vue'
import HomeSwiper from './home/Swiper'
import HomeIcons from './home/icons'
export default {
  name: "Home",
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
