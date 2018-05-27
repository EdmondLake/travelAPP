<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <!--循环决定有多少个轮播页面-->
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page">
          <img class="icon-img" :src="item.imgUrl" alt="">
          <p class="icon-text">{{item.disribe}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

  </div>
</template>

<script>
  export default {
    name: "HomeIcons",
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination'
        },
        iconList: [{
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          disribe: '景点门票'
        },{
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          disribe: '一日游'
        },{
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          disribe: '一日游'
        },{
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          disribe: '一日游'
        },{
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          disribe: '一日游'
        },{
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          disribe: '一日游'
        },{
          id: '0006',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          disribe: '一日游'
        },{
          id: '0007',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          disribe: '一日游'
        },{
          id: '0008',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          disribe: '一日游'
        },{
          id: '0009',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          disribe: '一日游'
        }]
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
