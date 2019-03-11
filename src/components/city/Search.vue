<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id">{{item.name}}</li>
        <li v-show="hasNoList" class="search-item border-bottom">没有找到数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  computed:{
    hasNoList(){
      return !this.list.length;
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if(!this.keyword){
        this.list=[];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search);
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.search
  height 0.72rem
  padding 0 0.1rem
  background $bgColor
  .search-input
    box-sizing border-box
    height 0.62rem
    width 100%
    line-height 0.62rem
    text-align center
    border-radius 0.06rem
    padding 0 0.1rem
.search-content
  overflow hidden
  position absolute
  top 1.5rem
  right 0
  left 0
  bottom 0
  background #eee
  z-index 1
  .search-item
    line-height 0.62rem
    padding-left 0.2rem
    color #666
    background #fff
</style>
