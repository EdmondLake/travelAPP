<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li v-for="item of recommendList" :key="item.id" class="item">
        <img :src="item.imgUrl" alt="" class="item-img">
        <div class="item-info">
          <div class="item-title">{{item.title}}</div>
          <div class="item-desc">{{item.desc}}</div>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommendList: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height: .8rem
    text-indent: .2rem
    background: #eee
    margin-top: .2rem
  .item
    overflow: hidden
    height: 1.9rem
    display: flex
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      min-width: 0
      flex: 1
      padding: .1rem
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        color: #ccc
        line-height: .4rem
        ellipsis()
      .item-button
        line-height:.44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #ffffff
</style>
