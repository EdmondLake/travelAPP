<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <!--循环决定有多少个轮播页面-->
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page">
          <img class="icon-img" :src="item.imgUrl" alt="">
          <p class="icon-text">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

  </div>
</template>

<script>
  export default {
    name: "HomeIcons",
    props: {
      iconList: Array
    },
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          // 阻止自动轮播
          autoplay: false
        }
      }
    },
    computed: {
      pages () {
        const pages = []
        this.iconList.forEach((item,index) => {
          // index大于7的都展示在第二页
          const page = Math.floor(index / 8)
          if(!pages[page]){
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 55%
    margin-top: .2rem
  .icon
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    text-align: center
    font-size: .24rem
    .icon-img
      margin-top: .05rem
      margin-bottom: .1rem
      width: 70%
    .icon-text
      /*因为可能经常会用到下面这三个样式组合，所以直接给它定义一个文件，每次需要用到的时候就引入*/
      ellipsis()
</style>
