<template>
  <detail-banner :bannerImg="bannerImg" :sightName="sightName" :gallaryImgs="gallaryImgs"></detail-banner>
</template>

<script>
import DetailBanner from './components/Banner'
import axios from 'axios'
export default {
  name: "Detail",
  data () {
    return {
      bannerImg: '',
      sightName: '',
      gallaryImgs: []
    }
  },
  components: {
    DetailBanner
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json')
        .then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.bannerImg = data.bannerImg
        this.sightName = data.sightName
        this.gallaryImgs = data.gallaryImgs
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style scoped>

</style>
