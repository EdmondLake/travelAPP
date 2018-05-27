<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
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
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  // 只有当整个数组都被加载之后，swiper组件才开始显示，这样避免页面加载时显示的是最后一张图片
  computed: {
    showSwiper () {
      return this.swiperList.length
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
