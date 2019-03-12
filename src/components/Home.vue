<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>
<script>
import HomeHeader from "./home/header.vue";
import HomeSwiper from "./home/Swiper";
import HomeIcons from "./home/icons";
import HomeRecommend from "./home/recommend";
import HomeWeekend from "./home/weekend";
import axios from "axios";
import {mapState} from 'vuex'
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data (){
    return{
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[],
      lastCity:''
    }
  },
  computed:{
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json?city="+this.city).then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res=res.data;
      if(res.ret&&res.data){
        const data=res.data;
        this.swiperList=data.swiperList;
        this.iconList=data.iconList;
        this.recommendList=data.recommendList;
        this.weekendList=data.weekendList;
      }
      console.log(res)
    }
  },
  mounted() {
    this.lastCity=this.city;
    this.getHomeInfo();
  },
  activated (){
      if(this.lastCity!==this.city)
      {
        this.lastCity=this.city;
        this.getHomeInfo();
      }
  }
};
</script>
<style scoped>
</style>
