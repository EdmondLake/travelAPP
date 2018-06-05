<template>
  <div>
    <div class="list-item" v-for="(item,index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="ticket-icon"></span>
        {{item.title}}
      </div>
      <!--判断如果item还有children，就说明它是一个多级的菜单-->
      <div v-if="item.children" class="item-children">
        <!--那么就把item.children当成list，再传给自己，需哦一个递归的循环-->
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailList",
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
    .ticket-icon
      position: relative
      left: .08rem
      top: .08rem
      display: inline-block
      width: .36rem
      height: .36rem
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right: .1rem
      -webkit-background-size: .4rem 3rem
      background-size: .4rem 3rem
  .item-children
    padding: 0 .2rem

</style>
