<template>
  <div>
    <div class="title">周末去哪儿</div>
    <div class="info" v-for="item of weekendList" :key="item .id">
      <div class="img-wrapper">
        <img :src="item.imgUrl" alt="" class="info-img">
      </div>
      <div class="item-info">
        <div class="info-title">
          {{item.title}}
        </div>
        <div class="info-desc">
          {{item.desc}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      weekendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/b7/2f4621a3a4e12c.jpg_r_640x214_d55c10ba.jpg',
        title: '温泉有水上乐园',
        desc: '泡泡温泉，吹吹海风，深觉人生美好'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/b7/2f4621a3a4e12c.jpg_r_640x214_d55c10ba.jpg',
        title: '温泉有水上乐园',
        desc: '泡泡温泉，吹吹海风，深觉人生美好'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    text-indent: .2rem
    line-height:.8rem
    background-color: #eee
  .img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
    .info-img
      width: 100%
  .item-info
    padding: .1rem
    .info-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .info-desc
      line-height: .4rem
      color: #ccc
      ellipsis()

</style>
