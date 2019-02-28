<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img
          class="swiper-img"
          :src="item.imgUrl"
        >
      </swiper-slide>
      

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop:true,
        autoplay:true
      },
      swiperList:[{
          id:"0001",
          imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/34779377298b576683461a46c0a94d08.jpg_750x200_2b1b0569.jpg"
        },{
          id:"0002",
          imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/70f9002b859d6e765533ced2df18db50.jpg_750x200_83cfeb88.jpg"
        }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background #ffffff !important
  .wrapper 
    overflow hidden
    width 100%
    height 0
    padding-bottom 26.66%
    background #eee
    .swiper-img
      width 100%
</style>

