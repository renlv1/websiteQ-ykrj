<template>
  <div class="news-wrapper">
    <div class="bg"></div>
    <div class="wrap">
      <div class="Breadcrumb">
        <span>{{$t('newViewPage.text7')}}：</span>
        <router-link :to="$route.query.name" v-if="$route.query.name === 'newView'">{{$t('newViewPage.text6')}}</router-link>
        <router-link :to="$route.query.name" v-else-if="$route.query.name === 'home'">{{$t('newViewPage.text9')}}</router-link>
        <span class="current-title">{{newsItem.title}}</span>
      </div>
      <div class="container">
        <h1 class="headline">{{newsItem.title}}</h1>
        <p class="subhead" v-if="newsItem.createTime">{{$t('newViewPage.text8')}}：{{changeDate(newsItem.createTime)}}</p>
        <!--<div class="imgbox">-->
        <!--<img :src="'http://image.9mn3n.cn/' + newsItem.coverImgUrl" alt="" v-if="newsItem.coverImgUrl">-->
        <!--</div>-->
        <div class="container-desc" v-html="newsItem.content"></div>
      </div>
      <!--<div class="gotoPage">-->
      <!--<div class="previous-page"><span class="bord">上一页</span>：<router-link to="/news/3">上一页</router-link></div>-->
      <!--<div class="next-page"><span  class="bord">下一页</span>：<router-link to="/news/2">下一页</router-link></div>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      routerTitle: '',
      newsItem: [],
      language: 2
    }
  },
  created () {
    if (localStorage.getItem('Qlang') === 'CN') {
      this.language = 1
    } else {
      this.language = 2
    }
    this.getNewInfo()
  },
  methods: {
    /* getNewInfo () {
      axios.get('http://web.exploitsmart.com/official/preQueryOfficialWeb?terrace=3&language=' + this.language).then(res => {
        if (res.data.status === 'success' && res.data.success === true) {
          let newArr = res.data.data.results
          newArr.forEach((item, index) => {
            if (item.id === parseInt(this.$route.query.id)) {
              this.newsItem = item
            }
          })
        }
      }).catch(err => {
        console.log(err)
      })
    }, */
    getNewInfo () {
      let baseUrl = 'https://api.kleingame.ai'
      let url = `${baseUrl}/notice/noticeDetailNew?id=${this.$route.query.id}`
      axios.post(url).then((res) => {
        if (res.data.success) {
          if (res.data.data.title) {
            this.newsItem = res.data.data
          } else {
            this.newsItem = JSON.parse(res.data.data)
          }
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    changeDate (time) { // 时间戳转换
      function ifTime (value) { // 判断时间是否是个位数
        if (value < 10) {
          return '0' + value
        }
        return value
      }
      let newTime = new Date(time)
      let day = newTime.getDate()
      let month = newTime.getMonth() + 1
      let year = newTime.getFullYear()
      return year + '/' + ifTime(month) + '/' + ifTime(day)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .news-wrapper
    margin-top: 120px
    padding-bottom: 100px
    font-size: 18px
    color: #333
    @media screen and (max-width: 768px)
      margin-top: 60px
    .bg
      width: 100%
      height: 254px
      background: url("../../assets/images/newView/newsDetail-banner.png") no-repeat
      background-size: cover
    .wrap
      .Breadcrumb
        margin-top:110px
        font-size: 18px
        color: #4c4c4c
        padding-bottom: 20px
        .current-title
          color #d9ab2b
        a
          color: #333
          &:hover
            color: #d9ab2b
      .container
        border-top: 1px solid #ccc
        padding: 50px 0 164px
        min-height 620px
        p
          margin-bottom: 54px
          line-height: 1.5
          &.small-title
            margin-bottom: 20px
        .headline
          font-size: 36px
          color: #1a1a1a
          margin-bottom: 30px
          font-family: "Microsoft YaHei UI"
          font-weight: normal
        .subhead
          font-size: 18px
          color: #808080
          margin-bottom: 60px
        .margin-r
          margin-right: 10px
        .imgbox
          max-width: 960px
          text-align: center
          margin: 80px 0 70px
          transition: all .2s linear
          img
            width: 100%
            height: 100%
        .container-desc
          margin-right: 10px
          p:last-child
            margin-bottom: 0
      .gotoPage
        display: flex
        align-items: center
        justify-content: space-between
        font-size: 18px
        color: #4d4d4d
        padding-top: .4rem
        a
          color: #333
        .bord
          font-weight: bold
          color: #1a1a1a
  @media screen and (max-width: 767px)
    .news-wrapper .imgbox
      width: 100% !important
      height: auto !important
</style>
