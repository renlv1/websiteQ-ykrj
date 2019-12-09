<template>
  <div class="footer" v-if="footerShow">
    <div class="wrap">
      <div class="foot-left">
        <h2></h2>
        <p>{{$t('footer.text9')}}</p>
      </div>
      <div class="foot-right">
        <p>Contact us</p>
        <p>service.qarthur@gmall.com</p>
        <p>© 2016-2018 qarthur Ltd</p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .footer{
    height: 329px;
    background-color: #000;
    width: 100%;
    .wrap{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      .foot-left{
        color: #fff;
        width: 300px;
        @media screen and (max-width: 1024px) {
          margin: 0 auto;
        }
        h2{
          width: 269px;
          height: 46px;
          background-image: url("../assets/images/header/logo.png");
          margin-bottom: 10px;
          @media screen and (max-width: 1024px) {
            margin: 0 auto 20px;
          }
        }
        p{
          color: #fff;
          line-height: 1.2;
          font-size:14px;
        }
      }
      .foot-right{
        @media screen and (max-width: 1024px) {
          display: none;
        }
        color: #fff;
        text-align: right;
        p{
          margin: 10px 0;
          font-size:14px;
        }
      }
    }
  }
</style>

<script>
import Bus from '../assets/js/eventBus'
import { i18n } from '../i18n/config'
export default{
  data () {
    return {
      lanActive: 1,
      footerShow: true,
      linkData: [
        {
          img: require('../assets/images/footer/foot_p1.svg'),
          text: 'Twitter'
        },
        {
          img: require('../assets/images/footer/foot_p2.svg'),
          text: 'Facebook'
        },
        {
          img: require('../assets/images/footer/foot_p3.svg'),
          text: 'Github'
        },
        {
          img: require('../assets/images/footer/foot_p4.svg'),
          text: 'Telegram'
        }
      ]
    }
  },
  watch: {
    $route (to, from) {
      // console.log(to, from)
      if (to.path === '/home') {
        this.footerShow = false
      } else {
        this.footerShow = true
      }
    }
  },
  created () {
    if (localStorage.getItem('Qlang') === 'CN') {
      this.lanActive = 1
    } else {
      this.lanActive = 2
    }
  },
  methods: {
    eventbus (n, path) {
      this.$router.push({path: path})
      Bus.$emit('highlightCls', n)
    },
    chooseCN () {
      this.lanActive = 1
      localStorage.setItem('Qlang', 'CN')
      i18n.locale = 'CN'
      window.location.reload()
    },
    chooseEN () {
      this.lanActive = 2
      localStorage.setItem('Qlang', 'EN')
      i18n.locale = 'EN'
      window.location.reload()
    }
  }
}
</script>
