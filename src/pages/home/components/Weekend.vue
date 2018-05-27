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
  props: {
    weekendList: Array
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
