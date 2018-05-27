<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img :src="item.imgUrl" class="swiper-img">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/77/f63bd04dd5319602.jpg_750x200_6ba8e0ca.jpg'
      },{
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1801/bd/04554e7c67650302.jpg_750x200_4293d60a.jpg'
      }]
    }
  }


}
</script>

<style lang="stylus" scoped>
  /*swiper插件是全局引用的，要修改小圆点的颜色为白色，需要对当前文件做穿透*/
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  /*对轮播图的宽高做一个比例限定*/
  .wrapper
    overflow: hidden
    height: 0
    width: 100%
    padding-bottom: 31.25%
    .swiper-img
      width: 100%
</style>
