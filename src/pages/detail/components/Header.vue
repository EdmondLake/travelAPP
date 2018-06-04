<template>
  <div>
    <router-link tag="div" to="/" v-show="showAbs">
      <div class="header-abs iconfont">
        &#xe624;
      </div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyl"
    >
      <router-link tag="div" to="/">
        <span class="iconfont header-fixed-back">&#xe624;</span>
      </router-link>
      {{sightName}}
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  props: {
    sightName: String
  },
  data () {
    return {
      showAbs: true,
      opacityStyl: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop || document.body.scrollTop
      if( top>60 ){
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyl = {opacity}
        this.showAbs = false
      }
      else{
        this.showAbs = true
      }
    }
  },
  // keep-alive组件激活时调用
  // 页面展示时绑定scroll事件
  activated () {
    // 一旦滚动页面，就执行handleScroll函数
    window.addEventListener('scroll',this.handleScroll)
  },
  // 页面隐藏或被替换时解绑
  deactivated () {
    window.removeEventListener('scroll',this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    text-align: center
    border-radius: .4rem
    background: rgba(0,0,0,0.8)
    font-size: .36rem
    color: #ffffff
  .header-fixed
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: $headerHeight
    line-height: $headerHeight
    background: $bgColor
    text-align: center
    color: #ffffff
    font-size: .32rem
  .header-fixed-back
    position: absolute
    top: 0
    left: 0
    width: .64rem
    text-align: center
    font-size: .4rem

</style>
