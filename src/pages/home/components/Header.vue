<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      北京
      <span class="iconfont arrow-icon">&#xe65e;</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    height: .86rem
    line-height: .86rem
    background: $bgColor
    color: #ffffff
    .header-left
      width: .64rem
      /*float: left*/
      .back-icon
        font-size: .4rem
        text-align: center
    .header-input
      flex: 1
      background-color: #fff
      height: .64rem
      line-height: .64rem
      border-radius: .1rem
      margin-top: .11rem
      margin-left: .2rem
      padding-left: .2rem
      color: #ccc
    .header-right
      min-width: 1.04rem
      padding: 0 .2rem
      text-align: center
      color: #fff
      /*float: right*/
      .arrow-icon
        font-size: .24rem

</style>
