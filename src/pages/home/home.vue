<template>
    <div>
      <div class="home">
        <div class="hr"></div>
        <banner></banner>
        <div class="areaA" id="areaTop">
          <div class="content">
            <div class="title Plateia-Bold">{{$t('home.text2')}}</div>
            <div class="text">{{$t('home.text3')}}</div>
            <div class="img"><img src="../../assets/images/new_home/INFOGRAPH1.png" alt=""></div>
          </div>
        </div>
        <div class="areaB">
          <div class="areaB-con">
            <div class="text-box">
              <div class="areaB-box">
                <div class="title Plateia-Bold">{{$t('home.text4')}}</div>
                <div class="con">{{$t('home.text5')}}</div>
                <div class="phone-img"><img src="../../assets/images/new_home/Phone.png" alt=""></div>
              </div>
            </div>
            <div class="img"><img src="../../assets/images/new_home/INFOGRPAHIC2.png" alt=""></div>
          </div>
        </div>
        <div class="areaC">
          <div class="areaC-box">
            <div class="title Plateia-Bold">{{$t('home.text6')}}</div>
            <div class="text">{{$t('home.text7')}}</div>
            <div class="img"><img src="../../assets/images/new_home/INFOGRAPHIC3.png" alt=""></div>
          </div>
        </div>
        <div class="areaD">
          <div class="text-box">
            <div class="title Plateia-Bold">{{$t('home.text8')}}</div>
            <div class="con">{{$t('home.text9')}}</div>
          </div>
          <div class="img"><img src="../../assets/images/new_home/QCOIN.png" alt=""></div>
        </div>
        <div class="areaE">
          <div class="title Plateia-Bold">{{$t('home.text10')}}</div>
          <div class="con">{{$t('home.text11')}}</div>
          <div class="img"><img src="../../assets/images/new_home/INFOGRAPHIC4.png" alt=""></div>
        </div>
        <div class="areaF">
          <div class="text-box">
            <div class="title Plateia-Bold">{{$t('home.text12')}}</div>
            <div class="con">{{$t('home.text13')}}</div>
          </div>
          <div class="img"><img src="../../assets/images/new_home/INFOGRPAHIC5.png" alt=""></div>
          <div class="text-box text-bot">
            <div class="title Plateia-Bold">{{$t('home.text14')}}</div>
            <div class="p">{{$t('home.text15')}}</div>
            <div class="con">{{$t('home.text16')}}</div>
          </div>
        </div>
        <div class="areaG">
          <div class="faq-bg">
            <div class="img"><img src="../../assets/images/new_home/INFOGRAPHIC6.png" alt=""></div>
            <router-link to="/faq" tag="div" class="btn">
              <div class="box">
                <span class="faq Plateia-Bold">{{$t('home.text17')}}</span>
                <span class="row"><img src="../../assets/images/new_home/row.svg" alt=""></span>
              </div>
            </router-link>
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
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import banner from '../../components/banner.vue'
import Bus from '../../assets/js/eventBus'
import { i18n } from '../../i18n/config'
export default {
  data () {
    return {
      lanActive: 1,
      footerShow: true,
      linkData: [
        {
          img: require('../../assets/images/footer/foot_p1.svg'),
          text: 'Twitter'
        },
        {
          img: require('../../assets/images/footer/foot_p2.svg'),
          text: 'Facebook'
        },
        {
          img: require('../../assets/images/footer/foot_p3.svg'),
          text: 'Github'
        },
        {
          img: require('../../assets/images/footer/foot_p4.svg'),
          text: 'Telegram'
        }
      ]
    }
  },
  components: {
    banner
  },
  watch: {
    $route (to, from) {
      console.log(to, from)
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

<style lang="less" scoped>
.home{
  font-family: opLight;
  background-color: #000;
  .hr{
    height: 93px;
    width: 100%
  }
  .areaA{
    width: 100%;
    height: auto;
    padding-bottom: 40px;
    background: url("../../assets/images/new_home/Background2.png") no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 6px solid #000;
    @media screen and (max-width: 1024px){
      height: auto;
    }
    .content{
      text-align: center;
      .title{
        width: 1154px;
        margin: auto;
        font-size: 29px;
        font-weight: bold;
        color: #ffc100;
        padding: 46px 0 28px;
        @media screen and (max-width: 1200px){
          width: 100%;
          padding: 20px;
          font-size: 16px;
          line-height: 1.5;
        }
      }
      .text{
        width: 950px;
        margin: auto;
        color: #fff;
        font-size: 24px;
        line-height: 1.5;
        padding-bottom: 30px;
        @media screen and (max-width: 1200px){
          width: 100%;
          font-size: 14px;
          padding: 0 20px 5px;
        }
      }
      .img{
        width: 646px;
        height: 259px;
        margin: auto;
        @media screen and (max-width: 1024px){
          width: 100%;
          padding: 0 20px;
          height: auto;
          margin-bottom: -90px;
        }
        img{
          width: 100%;
        }
      }
    }
  }
  .areaB{
    width: 100%;
    height: auto;
    padding-bottom: 44px;
    background: url("../../assets/images/new_home/Backgroubd3.png") no-repeat;
    background-size: cover;
    background-position: center;
    @media screen and (max-width: 1024px) {
      height: auto;
    }
    .areaB-con{
        width: 100%;
        .text-box{
          width: 100%;
          height: auto;
          padding-bottom: 30px;
          border-top: 2px solid #000;
          background-color: rgba(255,255,255, .1);
          @media screen and (max-width: 1024px) {
            height: auto;
            padding-bottom: 30px;
          }
          .areaB-box{
            width: 1360px;
            height: 100%;
            margin: auto;
            position: relative;
            @media screen and (max-width: 1430px) {
              width: 100%;
              padding: 0 20px;
            }
            .title{
              width: 610px;
              margin: auto;
              font-size: 29px;
              color: #ffc100;
              text-align: center;
              padding: 34px 0 26px;
              font-weight: bold;
              @media screen and (max-width: 1024px) {
                width: 100%;
                font-size: 16px;
                line-height: 1.5;
                margin-top: 20px;
                padding: 34px 20px 10px;
              }
            }
            .con{
              width: 852px;
              margin: auto;
              color: #fff;
              font-size: 24px;
              line-height: 1.5;
              text-align: center;
              @media screen and (max-width: 1024px) {
                font-size: 14px;
                width: 100%;
              }
            }
            .phone-img{
              width: 350px;
              height: 628px;
              position: absolute;
              right: -70px;
              top: -90px;
              @media screen and (max-width: 1500px) {
               display: none;
              }
            }
          }
        }
        .img{
          width: 624px;
          height: 338px;
          margin: auto;
          margin-top: -10px;
          @media screen and (max-width: 1024px) {
            width: 100%;
            padding: 0 20px;
            height: auto;
            margin-bottom: -62px;
          }
          img{
            width: 100%;
          }
        }
      }
  }
  .areaC{
    width: 100%;
    height: auto;
    margin-top: 2px;
    margin-bottom: 2px;
    padding-bottom: 12px;
    background: url("../../assets/images/new_home/Background4.png") no-repeat ;
    background-size: cover;
    background-position: center;
    @media screen and (max-width: 1024px){
      height: auto;
    }
    .areaC-box{
      width: 1360px;
      height: 100%;
      margin: auto;
      text-align: center;
      @media screen and (max-width: 1360px){
        width: 100%;
      }
      .title{
        width: 900px;
        margin: auto;
        color: #ffc100;
        font-size: 29px;
        font-weight: bold;
        padding: 32px 0 26px;
        @media screen and (max-width: 1024px){
          width: 100%;
          font-size: 16px;
          line-height: 1.5;
          padding: 32px 20px 10px;
        }
      }
      .text{
        width: 1070px;
        margin: auto;
        color: #fff;
        font-size: 24px;
        line-height: 1.5;
        padding-bottom: 30px;
        @media screen and (max-width: 1070px){
          width: 100%;
          font-size: 14px;
          padding: 0 21px 20px;
        }
      }
      .img{
        width: 593px;
        height: 340px;
        margin: auto;
        @media screen and (max-width: 1024px){
          width: 100%;
          height: auto;
          padding: 0 40px;
        }
        img{
          width: 100%;
          height: 100%;
          @media screen and (max-width: 1024px){
            height: 100%;
          }
        }
      }
    }
  }
  .areaD{
    width: 100%;
    height: auto;
    padding-bottom: 46px;
    background: url("../../assets/images/new_home/Background5.png") no-repeat;
    background-size: cover;
    background-position: 66%;
    @media screen and (max-width: 1024px){
      height: auto;
    }
    .text-box{
      width: 100%;
      height: auto;
      padding-bottom: 20px;
      text-align: center;
      background-color: rgba(255,255,255, .1);
      @media screen and (max-width: 1024px){
        height: auto;
      }
      .title{
        width: 630px;
        margin: auto;
        font-size: 29px;
        font-weight: bold;
        color: #ffc100;
        padding: 32px 0 26px;
        @media screen and (max-width: 1024px){
          width: 100%;
          font-size: 16px;
          line-height: 1.5;
          padding: 20px 18px;
        }
      }
      .con{
        width: 840px;
        margin: auto;
        font-size: 24px;
        color: #fff;
        line-height: 1.5;
        padding-bottom: 29px;
        @media screen and (max-width: 1024px){
          font-size: 14px;
          width: 100%;
          padding-left: 12px;
          padding-right: 12px;
        }
      }
    }
    .img{
      width: 248px;
      height: 248px;
      margin: auto;
      margin-top: -20px;
    }
  }
  .areaE{
    width: 100%;
    height: auto;
    background: url("../../assets/images/new_home/Background6.png") no-repeat;
    background-size: cover;
    background-position: center;
    text-align: center;
    @media screen and (max-width: 1024px){
      height: auto;
      background-position: 16%;
    }
    .title{
      width: 898px;
      margin: auto;
      font-size: 29px;
      font-weight: bold;
      color: #ffc100;
      padding: 40px 0 30px;
      @media screen and (max-width: 1024px){
        width: 100%;
        font-size: 16px;
        line-height: 1.5;
        padding: 20px 36px;
      }
    }
    .con{
      width: 792px;
      margin: auto;
      padding-bottom: 20px;
      color: #fff;
      font-size: 24px;
      line-height: 1.5;
      @media screen and (max-width: 1024px){
        font-size: 14px;
        width: 100%;
        padding-left: 21px;
        padding-right: 21px;
      }
    }
    .img{
      width: 537px;
      height: auto;
      margin: auto;
      margin-bottom: -74px;
      @media screen and (max-width: 1024px){
        height: auto;
        margin-bottom: -20px;
        padding-left: 20px;
        padding-right: 20px;
      }
      @media screen and (max-width: 600px){
        width: 300px;
        height: auto;
      }
      img{
        width: 100%;
        @media screen and (max-width: 1024px){
          height: auto;
        }
      }
    }
  }
  .areaF{
    width: 100%;
    height: auto;
    background: url("../../assets/images/new_home/Background7.png") no-repeat;
    background-size: cover;
    background-position: center;
    @media screen and (max-width: 1024px){
      height: auto;
      padding-bottom: 30px;
      background-position: 26%;
    }
    .text-box{
      width: 100%;
      height: auto;
      padding-bottom: 60px;
      text-align: center;
      background-color: rgba(225,255,225, .1);
      @media screen and (max-width: 1200px){
        height: auto;
        padding-bottom: 50px;
      }
      .title{
        width: 660px;
        margin: auto;
        font-size: 29px;
        color: #ffc100;
        font-weight: bold;
        padding: 118px 0 23px;
        @media screen and (max-width: 1024px){
          width: 100%;
          font-size: 16px;
          line-height: 1.5;
          padding: 30px 20px 20px;
        }
      }
      .con{
        width: 860px;
        margin: auto;
        color: #fff;
        font-size: 24px;
        line-height: 1.5;
        @media screen and (max-width: 1024px){
          font-size: 14px;
          width: 100%;
          padding-right: 20px;
          padding-left: 20px;
        }
      }
    }
    .text-bot{
      margin-top: -44px;
      @media screen and (max-width: 1024px){
        margin-top: 44px;
      }
      .title{
        padding-top: 44px;
        padding-bottom: 0;
      }
      .p{
        font-size: 22px;
        color: #ffc100;
        padding: 6px 0 26px;
        @media screen and (max-width: 1024px){
          font-size: 14px;
        }
      }
    }
    .img{
      width: 1198px;
      height: 596px;
      margin: auto;
      @media screen and (max-width: 1200px){
        width: 100%;
        height: auto;
        padding-right: 20px;
        padding-left: 20px;
        margin-top: -22px;
      }
      img{
        width: 100%;
      }
    }
  }
  .areaG{
    width: 100%;
    height: auto;
    background-color: #000;
    .faq-bg{
      width: 100%;
      height: 1600px;
      background: url("../../assets/images/new_home/Background8.png") no-repeat;
      background-size: cover;
      background-position: center;
      position: relative;
      @media screen and (max-width: 1024px){
        padding-bottom: 540px;
        height: auto;
      }
      .img{
        width: 1022px;
        height: 456px;
        margin: 60px auto 44px;
        @media screen and (max-width: 1024px){
          width: 100%;
          height: auto;
          margin: 20px auto 30px;
          padding-left: 20px;
          padding-right: 20px;
        }
        @media screen and (max-width: 600px){
          margin-bottom: 70px;
        }
        img{
          width: 100%;
        }
      }
      .btn{
        width: 240px;
        height: 80px;
        line-height: 80px;
        text-align: center;
        font-size: 40px;
        font-weight: bold;
        color: #ffc100;
        border-radius: 10px;
        border: 2px solid #ffc100;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        @media screen and (max-width: 1024px){
          width: 180px;
          height: 60px;
          line-height: 60px;
          font-size: 30px;
        }
        &:hover{
          background-color: rgba(255,255,255,.2);
        }
        .box{
          width: auto;
          @media screen and (max-width: 1024px){
            line-height: 60px;
          }
          .faq{
            display: inline-block;
            font-size: 46px;
            @media screen and (max-width: 1024px){
              font-size: 30px;
            }
          }
          .row{
            margin-left: 20px;
            vertical-align: middle;
            @media screen and (max-width: 1024px){
              margin-left: 10px;
            }
            img{
              display: inline-block;
              width: 24px;
              height: 36px;
              @media screen and (max-width: 1024px){
                height: 24px;
              }
            }
          }
        }
      }
      .footer{
        height: 300px;
        background-color: rgba(255,255,255, .1);
        width: 100%;
        position: absolute;
        bottom: 0;
        @media screen and (max-width: 1024px){
          height: auto;
          padding-bottom: 80px;
          padding-top: 30px;
        }
        .wrap{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          height: 100%;
          @media screen and (max-width: 1360px){
            width: 100%;
            padding: 0 20px;
          }
          .foot-left{
            color: #fff;
            width: 300px;
            @media screen and (max-width: 1024px) {
              margin: 0 auto;
              width: 280px;
            }
            h2{
              width: 269px;
              height: 46px;
              background-image: url("../../assets/images/header/logo.png");
              margin-bottom: 10px;
              @media screen and (max-width: 1024px) {
                margin: 0 auto 20px;
                margin-left: 0;
                width: 180px;
                height: 30px;
                background-size: 100%;
              }
            }
            p{
              color: #fff;
              line-height: 1.5;
              font-size:14px;
              @media screen and (max-width: 1024px){
                font-size: 12px;
                width: 280px;
              }
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
    }
  }
}
</style>
