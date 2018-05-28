<template>
  <div>
    <div class="search">
      <input type="text" v-model="keyword" placeholder="输入城市名或拼音" class="search-input">
    </div>
  </div>
</template>

<script>
export default {
  name: "CitySearch",
  data () {
    return {
      keyword: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      line-height: .62rem
      padding: 0 .1rem
      text-align: center
      border-radius: .06rem
      color: #666

</style>
