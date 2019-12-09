<template>
  <div class="about">
    <div class="banner">
      <div class="wrap">
        <div class="title">
          <h3>{{$t('about.text1')}}</h3>
          <p>{{$t('about.text2')}}</p>
        </div>
      </div>
    </div>
    <div class="about-one aaa">
      <div class="wrap">
        <h3 class="about-one-title">{{$t('about.text3')}}</h3>
        <ul class="about-one-list">
          <li>
            <div class="li-img"></div>
            <h4>{{$t('about.text4')}}</h4>
            <p>{{$t('about.text5')}}</p>
          </li>
          <li>
            <div class="li-img"></div>
            <h4>{{$t('about.text6')}}</h4>
            <p>{{$t('about.text7')}}</p>
          </li>
          <li>
            <div class="li-img"></div>
            <h4>{{$t('about.text8')}}</h4>
            <p>{{$t('about.text9')}}</p>
          </li>
          <li>
            <div class="li-img"></div>
            <h4>{{$t('about.text10')}}</h4>
            <p>{{$t('about.text11')}}</p>
          </li>
          <li>
            <div class="li-img"></div>
            <h4>{{$t('about.text12')}}</h4>
            <p>{{$t('about.text13')}}</p>
          </li>
          <li>
            <div class="li-img"></div>
            <h4>{{$t('about.text14')}}</h4>
            <p>{{$t('about.text15')}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="about-two">
      <div class="wrap">
        <ul class="bbb">
          <li>
            <h3>{{$t('about.text16')}}</h3>
            <p>{{$t('about.text17')}}</p>
          </li>
          <li class="">
            <h3>{{$t('about.text18')}}</h3>
            <p>{{$t('about.text19')}}</p>
          </li>
        </ul>
        <div class="about-two-img">
          <img src="../../assets/images/about/a7.svg" alt="">
        </div>
      </div>
    </div>
    <div class="about-three ccc">
      <div class="wrap">
        <h3>{{$t('about.text20')}}</h3>
        <ul>
          <li v-for="(item, index) in $t('about.person').slice(0, num)" :key="index">
            <div class="title">
              <i>0{{index+1}}</i>
              <div class="title-right">
                <p>{{item.name}}</p>
                <span>{{item.post}}</span>
              </div>
            </div>
            <p>{{item.text}}</p>
          </li>
        </ul>
        <div class="btn" @click="viewMore()" v-show="btnshow">
          {{$t('about.text21')}}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .about {
    .banner{
      background-color: #000;
      background-image: url("../../assets/images/about/about-img.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      .wrap{
        display: flex;
        height: 500px;
        align-items: center;
        .title{
          @media screen and (max-width: 769px) {
            width: 100%;
            text-align: center;
          }
          h3{
            font-size: 40px;
            color: #fff;
            line-height: 1.5;
            width: 740px;
            @media screen and (max-width: 769px) {
              width: 100%;
            }
          }
          p{
            color: #fff;
            font-size:18px;
            line-height: 2;
            width: 588px;
            @media screen and (max-width: 768px) {
              width: 100%;
              text-align: center;
            }
          }
        }
      }
    }
    .about-one {
      background-color: #fff;
      padding-top: 150px;
      padding-bottom: 70px;
      .about-one-title {
        text-align: center;
        font-size: 30px;
        color: #997817;
        margin-bottom: 70px;
        line-height: 1.5;
      }
      .about-one-list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li {
          width: 400px;
          margin-bottom: 70px;
          text-align: center;
          padding: 0 20px;
          @media screen and (max-width: 768px) {
            width: 100%;
          }
          .li-img {
            display: inline-block;
            width: 97px;
            height: 110px;
            background: url("../../assets/images/about/a1.svg") no-repeat;
            background-size: cover!important;
          }
          &:nth-child(2) {
            .li-img {
              background: url("../../assets/images/about/a2.svg") no-repeat;
            }
          }
          &:nth-child(3) {
            .li-img {
              background: url("../../assets/images/about/a3.svg") no-repeat;
            }
          }
          &:nth-child(4) {
            .li-img {
              background: url("../../assets/images/about/a4.svg") no-repeat;
            }
          }
          &:nth-child(5) {
            .li-img {
              background: url("../../assets/images/about/a5.svg") no-repeat;
            }
          }
          &:nth-child(6) {
            .li-img {
              background: url("../../assets/images/about/a6.svg") no-repeat;
            }
          }
          h4 {
            font-size: 18px;
            margin-top: 20px;
            margin-bottom: 20px;
            color: #997817;
          }
          p {
            font-size: 16px;
            line-height: 1.5;
            color: #808080;
          }
        }
      }
    }
    .about-two {
      padding-top: 100px;
      padding-bottom: 100px;
      background-color: #fafafa;
      .wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        ul {
          width: 550px;
          @media screen and (max-width: 1024px) {
            text-align: center;
            width: 100%;
          }
          li {
            &:first-child {
              margin-bottom: 100px;
            }
            h3 {
              font-size: 30px;
              color: #997817;
              margin-bottom: 30px;
            }
            p {
              font-size: 16px;
              color: #4d4d4d;
              line-height: 1.5;
            }
          }
        }
        .about-two-img {
          width: 590px;
          @media screen and (max-width: 1024px) {
            margin: 30px auto;
            width: 100%;
          }
        }
      }
    }
    .about-three{
      .wrap{
        h3{
          text-align: center;
          color: #997817;
          font-size:30px;
          margin: 140px 0 100px;
        }
        ul{
          width: 1000px;
          margin: 0 auto;
          @media screen and (max-width: 1024px) {
            width: 100%;
          }
          li{
            margin-bottom: 80px;
            .title{
              display: flex;
              align-items: center;
              i{
                display: block;
                width: 50px;
                height: 50px;
                text-align: center;
                line-height: 50px;
                color: #fff;
                background-color: #f2c130;
              }
              .title-right{
                padding-left: 60px;
                p{
                  color: #997817;
                  font-size:18px;
                  position: relative;
                  padding-bottom: 10px;
                  &:before{
                    display: inline-block;
                    content: '';
                    width: 30px;
                    height: 1px;
                    background-color: #997817;
                    position: absolute;
                    top: 10px;
                    left:-40px;
                  }
                }
                span{
                  color: #997817;
                  font-size:16px;
                }
              }
            }
            &>p{
              margin-top: 40px;
              font-size:14px;
              color: #4d4d4d;
              line-height: 2;
            }
          }
        }
        .btn{
          position: relative;
          width: 260px;
          line-height: 68px;
          text-align: center;
          margin: 100px auto 110px;
          background-color: #f2c130;
          border-radius: 0px;
          font-size: 22px;
          color: #fff;
          cursor: pointer;
          &:hover:before, &:focus:before, &:active:before {
            right: 0px;
          }
          &:before{
            content: "";
            position: absolute;
            z-index: 1;
            left: 0px;
            right: 100%;
            bottom: 0;
            background: #d9ad2b;
            height: 4px;
            transition-property: right;
            transition-duration: 0.4s;
            transition-timing-function: ease-out;
          }
        }
      }
    }
  }
</style>

<script>
import Bus from '../../assets/js/eventBus'
export default{
  data () {
    return {
      num: 3,
      btnshow: true,
      anchor: this.$route.query.anchor
    }
  },
  mounted () {
    this.jumpAnchor()
    Bus.$on('clickDropNav', (anchor) => {
      document.querySelector('.' + anchor).scrollIntoView(true)
    })
  },
  watch: {
    $route (to, from) {
      this.anchor = to.query.anchor
      this.jumpAnchor()
    }
  },
  methods: {
    viewMore () {
      this.btnshow = false
      this.num = 5
    },
    jumpAnchor () {
      if (this.anchor) {
        document.querySelector('.' + this.anchor).scrollIntoView(true)
      }
    }
  }
}
</script>
