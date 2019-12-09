<template>
  <div class="assetRecite">
    <div class="banner">
      <div class="wrap">
        <div class="title">
          <h3>{{$t('assetRecite.context1')}}</h3>
          <p>
            {{$t('assetRecite.context2')}}
          </p>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="itemList" v-for="(item,index) in $t('assetRecite.itemDatas')" :key="index">
        <div class="mianB-bg"><img :src="item.urlImg" alt=""></div>
        <div class="content">
          <div class="con-info">
            <div class="title">{{item.title}}</div>
            <div class="catalogue">{{item.investment}}</div>
            <div class="list">
              <div class="info-li"><i><img src="../../assets/images/assetRecite/check.svg" alt=""></i>{{item.profit}}</div>
              <div class="info-li"><i><img src="../../assets/images/assetRecite/check.svg" alt=""></i>{{item.category}}</div>
              <div class="info-li"><i><img src="../../assets/images/assetRecite/check.svg" alt=""></i>{{item.london}}</div>
            </div>
            <div class="explain" :class="{explainActive: activeIndex===index}">
              <div class="explain-con"><i>{{item.windon}}: </i>{{item.explain}}</div>
              <div class="explain-text1"><i>{{item.network}}: </i>{{item.workcon}}</div>
              <div class="explain-text2"><i>{{item.payments}}: </i>{{item.paymentscon}}</div>
            </div>
            <div class="but-box">
              <div class="btnBox">
                <div class="button btn1"  @click="activeIndex = index"  v-if="activeIndex !== index || activeIndex === -1">{{item.detailsBtn}}</div>
                <div class="button" :class="{'btn2': activeIndex == index,'btn3':  activeIndex !== index}">{{item.auditBtn}}</div><br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .assetRecite{
    width: 100%;
    height: auto;
    overflow: hidden;
    background-color: #ffffff;
    .banner{
      background-color: #000;
      background-image: url("../../assets/images/assetRecite/assets-banner.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      .wrap{
        display: flex;
        height: 500px;
        align-items: center;
        .title{
          h3{
            font-size: 40px;
            color: #fff;
            line-height: 1.5;
            width: 740px;
            @media screen and (max-width: 768px) {
              width: 100%;
              text-align: center;
            }
          }
          p{
            color: #fff;
            font-size:18px;
            line-height: 2;
            width: 600px;
            @media screen and (max-width: 768px) {
              width: 100%;
              text-align: center;
            }
          }
        }
      }
    }
    .main{
      width: 1200px;
      margin: 130px auto 170px;
      height: auto;
      overflow: hidden;
      @media screen and (max-width: 1240px) {
        width: 100%;
        padding: 0 20px;
        margin-bottom: 100px;
      }
      .itemList{
        width: 100%;
        height: auto;
        margin-bottom: 70px;
        overflow: hidden;
        @media screen and (max-width: 1200px) {
          height: auto;
          overflow: hidden;
        }
        .mianB-bg{
          width: 100%;
          height: 340px;
          vertical-align: middle;
          @media screen and (max-width: 1200px) {
            height: 150px;
            img {
              height: 100%;
            }
          }
        }
        .content{
          width: 100%;
          height: auto;
          border-left: 1px solid #eee;
          border-right: 1px solid #eee;
          border-bottom: 1px solid #eee;
          overflow: hidden;
          @media screen and (max-width: 1200px) {
            height: auto;
            overflow: hidden;
          }
          .con-info{
            width: 1100px;
            height: 100%;
            margin: 0 auto;
            @media screen and (max-width: 1200px) {
              width: 100%;
              text-align: center;
            }
            .title{
              font-size: 18px;
              color: #997817;
              padding: 24px 0;
            }
            .catalogue{
              font-size: 18px;
              color: #4d4d4d;
            }
            .list{
              width: 100%;
              height: auto;
              padding: 30px 0 44px;
              border-bottom: 1px solid #eee;
              @media screen and (max-width: 1200px){
                display: flex;
              }
              @media screen and (max-width: 700px){
                display: block;
              }
              .info-li{
                float: left;
                text-align: left;
                width: auto;
                padding-right: 48px;
                font-size: 14px;
                font-weight: 600;
                color: #4d4d4d;
                @media screen and (max-width: 1200px){
                  float: none;
                  padding-right: 0;
                  flex: 1;
                  text-align: center;
                }
                @media screen and (max-width: 700px){
                  width: 100%;
                  padding: 5px 0;
                }
                i{
                  display: inline-block;
                  width: 12px;
                  height: 12px;
                  line-height: 12px;
                  font-size: 12px;
                  margin-right: 10px;
                  img{
                    width: 100%;
                    height: 100%;
                  }
                }
              }
            }
            .explain{
              width: 1020px;
              box-sizing: content-box;
              max-height: 0;
              overflow: hidden;
              transition: all .5s;
              font-size: 16px;
              color: #4d4d4d;
              padding-top: 0px;
              padding-bottom: 0px;
              &.explainActive{
                max-height: 1000px;
                padding-top: 30px;
                padding-bottom: 30px;
              }
              .fade-enter-active, .fade-leave-active {
                transition: opacity 0.5s;
              }
              .fade-enter, .fade-leave-to {
                opacity: 0;
              }
              @media screen and (max-width: 1200px){
                width: 90%;
                padding-left: 20px;
                padding-right: 20px;
                text-align: left;
              }
              .explain-con i,.explain-text1 i,.explain-text2 i{
                font-weight: 600;
              }
              .explain-con{
                line-height: 1.5;
                padding-bottom: 30px;
              }
              .explain-text1{
                padding-bottom: 30px;
              }
            }
            .but-box{
              width: 100%;
              padding: 40px 0 30px;
              display: flex;
              align-items: center;
              justify-content: center;
              @media screen and (max-width: 500px) {
                width: 100%;
                height: auto;
              }
              .btnBox {
                font-size: 0;
              }
              .button{
                display: inline-block;
                width: 188px;
                font-size: 16px;
                color: #fff;
                line-height: 48px;
                text-align: center;
                position: relative;
                cursor: pointer;
                @media screen and (max-width: 500px) {
                  margin: 0 auto 10px;
                }
                &:hover:before, &:focus:before, &:active:before {
                  right: 0;
                }
                &:before{
                  content: "";
                  position: absolute;
                  z-index: 1;
                  left: 0;
                  right: 100%;
                  bottom: 0;
                  background: #d9ab2b;
                  height: 4px;
                  transition-property: right;
                  transition-duration: 0.4s;
                  transition-timing-function: ease-out;
                }
              }
              .btn1{
                background-color: #f2c130;
                margin-right: 50px;
                @media screen and (max-width: 486px) {
                  margin-right: 0px;
                }
                &:before{
                  background: #d9ab2b;
                }
              }
              .btn2{
                background-color: #3d4a66;
                &:before{
                  background: #2e384c;
                }
              }
              .btn3{
                margin: 0 auto;
                background-color: #3d4a66;
                position: relative;
                @media screen and (max-width: 500px) {
                  float: none;
                }
                &:before{
                  background: #2e384c;
                }
              }
              .cente{
                float: none;
                margin: 0 auto;
              }
              .disnone{
                display: none;
              }
              .disblock{
                display: block;
              }
            }
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
      activeIndex: -1,
      isCN: false,
      show: true
    }
  },
  created () {
    if (localStorage.getItem('Qlang') === 'CN') {
      this.isCN = true
    } else {
      this.isCN = false
    }
    Bus.$on('headerChangeLang', (e) => {
      if (e === 'CN') {
        this.isCN = true
      } else {
        this.isCN = false
      }
    })
  }
}
</script>
