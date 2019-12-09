   <template>
  <nav class="header">
    <div class="pc">
      <div class="wrap">
        <h1><router-link tag="span" to="/home"></router-link></h1>
        <div class="rightBox">
          <div class="head-right">
            <ul :class="{'close':closeFlag === 2}">
              <router-link tag="li" v-for="(item, index) in $t('header.navList')" :key="index" :to="item.path" v-if="item.path !== '/home'">{{item.name}}</router-link>
            </ul>
            <ul :class="{'close':closeFlag === 1}">
              <li><a href="https://ex.bitquin.com/login" target="_blank">{{$t('header.text1')}}</a></li>
              <li><a href="https://ex.bitquin.com/signup" target="_blank">{{$t('header.text2')}}</a></li>
              <li class="langBox" @click="pcLangClose = !pcLangClose">
                <span>{{curLang}}</span>
                <ul :class="{'close': pcLangClose}">
                  <li v-for="(item, index) in langList" :key="index" @click="changeLang(item)" :class="{'active': item.lang == curLang}">{{item.lang}}</li>
                </ul>
              </li>
              <li class="trade"><a href="https://ex.bitquin.com/home" target="_blank">{{$t('header.text3')}}</a></li>
            </ul>
          </div>
          <div class="mune" @click="checkMenu()"></div>
        </div>

      </div>
    </div>
    <div class="app">
      <h1 @click="$router.push('/home')"></h1>
      <div class="user" @click="open">
      </div>
      <div class="userBox">
        <ul>
          <router-link :to="item.path" tag="li" v-for="(item, index) in $t('header.navList')" :key="index" @click.native="open">{{item.name}}</router-link>
        </ul>
        <a href="https://ex.bitquin.com/login" target="_blank">{{$t('header.text1')}}</a>
        <a href="https://ex.bitquin.com/signup" target="_blank">{{$t('header.text2')}}</a>
        <div class="lang" @click="langClose = !langClose">
          {{$t('home.text21')}}
          <ul :class="{'close': langClose}">
            <li v-for="(item, index) in langList" :key="index" :class="{'active': curLang == item.tag}" @click="changeLang(item)">{{item.lang}}</li>
          </ul>
        </div>
      </div>
      <!--<div class="navBox">-->

      <!--</div>-->
    </div>
  </nav>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .header{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    z-index: 999;
    .app{
      height: 93px;
      display: none;
      width: 100%;
      z-index: 99;
      background-color: #000;
      @media screen and (max-width: 1024px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
      }
      h1{
        width: 180px;
        height: 30px;
        background-image: url("../assets/images/header/logo.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 180px 30px;
      }
      .user{
        width: 41px;
        height: 20px;
        background-image: url("../assets/images/header/menu.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 41px 20px;
      }
      .userBox{
        z-index: 89;
        position: fixed;
        top:0;
        right: -60%;
        width: 60%;
        height: 100vh;
        background-color: #000;
        transition: all 1s;
        overflow-y: auto;
        &>ul{
          width: 100%;
          li{
            width: 100%;
            border-bottom:1px solid #353838;
            color: #fff;
            font-size:18px;
            min-height: 60px;
            display: flex;
            align-items: center;
            padding-left: 20px;
            &.router-link-active{
              color: #cba12d;
            }
          }
        }
        a{
          display: flex;
          color: #fff;
          height: 60px;
          border-bottom:1px solid #353838;
          align-items: center;
          padding-left: 20px;
          font-size: 18px ;
        }
        .lang{
          display: flex;
          height: 60px;
          align-items: center;
          position: relative;
          color: #fff;
          font-size: 18px;
          padding-left: 20px;
          border-bottom:1px solid #353838;
          &:after{
            content: '';
            width: 13px;
            height: 8px;
            background-image: url("../assets/images/lang/drop-down.svg");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 13px 8px;
            margin-left: 20px;
          }
          ul{
            width: 100%;
            position: absolute;
            top: 61px;
            left: 0;
            height: 0;
            overflow: hidden;
            transition: all 1s;
            &.close{
              height: 427px;
            }
            li{
              padding-left: 40px;
              color: #fff;
              font-size: 16px;
              height: 60px;
              border-bottom:1px solid #353838;
              display: flex;
              align-items: center;
              &.active{
                color: #cba12d;
              }
            }
          }
        }
      }
      .navBox{
        z-index: 98;
        position: fixed;
        top:0;
        left: -60%;
        width: 60%;
        height: 100%;
        background-color: #000;
        transition: all 1s;
      }
    }
    .pc{
      height: 93px;
      background-color: #000;
      @media screen and (max-width: 1024px) {
        display: none;
      }
      .wrap{
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media screen and  (max-width: 1360px){
          width: 100%;
        }
        h1{
          width: 269px;
          height: 46px;
          background-image: url("../assets/images/header/logo.png");
          span{
            display: block;
            width: 100%;
            height: 100%;
            cursor: pointer;
          }
        }
        .rightBox{
          display: flex;
          justify-content: flex-end;
          align-items: center;
          height: 100%;
          .head-right{
            display: flex;
            justify-content: space-between;
            position: relative;
            min-width: 950px;
            height: 100%;
            &>ul{
              display: flex;
              transition: all 1s;
              transform: translate(0, -200px);
              opacity: 0;
              position: absolute;
              right: 20px;
              align-items: center;
              height: 100%;
              min-width: 100%;
              justify-content: flex-end;
              margin: 0 auto;
              &.close{
                transform: translate(0, 0px);
                opacity: 1;
              }
              &>li{
                color: #b3b3b3;
                font-size: 22px;
                text-align: center;
                height: 37px;
                line-height: 35px;
                padding: 0 20px;
                border-radius: 10px;
                border: 1px solid #b3b3b3;
                margin: 0 10px;
                cursor: pointer;
                user-select: none;
                min-width: 136px;
                font-family:"headFont";
                position: relative;
                &.trade{
                  line-height: 33px;
                  border: 2px solid #ffc100;
                  &:hover{
                    border: 2px solid #ffc100;
                    a{
                      color: #fff;
                    }
                  }
                  &:after{
                    background-image: url("../assets/images/header/row-yellow.svg");
                    content: '';
                    width: 13px;
                    height: 21px;
                    background-repeat: no-repeat;
                    display: inline-block;
                    vertical-align: middle;
                    position: absolute;
                    right: 3px;
                    top:50%;
                    transform: translate(0 ,-50%);
                  }
                  a{
                    color: #fff;
                  }
                }
                a{
                  color: #b3b3b3;
                  font-family:"headFont";
                  display: inline-block;
                  vertical-align: middle;
                  font-size: 22px;
                }
                &.router-link-active{
                  color: #ffc100;
                  border: 1px solid #ffc100;
                }
                &:hover{
                  color: #ffc100;
                  border: 1px solid #ffc100;
                  a{
                    color: #ffc100;
                  }
                }
                &.langBox{
                  position: relative;
                  min-width: 160px;
                  span{
                    display: inline-block;
                    font-size:22px;
                    vertical-align: middle;
                    width: 100%;
                  }
                  ul{
                    position: absolute;
                    top:37px;
                    left: 0;
                    padding-top: 37px;
                    height: 0px;
                    overflow: hidden;
                    transition: all 0.5s;
                    &.close{
                      height: 360px;
                    }
                    li{
                      font-family:"headFont";
                      color: #eee;
                      font-size: 16px;
                      text-align: center;
                      height: 37px;
                      line-height: 37px;
                      width: 160px;
                      border-radius: 10px;
                      /*border: 1px solid #b3b3b3;*/
                      cursor: pointer;
                      user-select: none;
                      margin-bottom: 10px;
                      background-color: #04081B;
                      &:hover{
                        color: #ffc100;
                        border: 1px solid #ffc100;
                      }
                      &.active{
                        color: #ffc100;
                        border: 1px solid #ffc100;
                      }
                    }
                  }
                }
              }
            }
          }
          .mune{
            width: 58px;
            height: 37px;
            background-image: url("../assets/images/header/menu.png");
            background-position: center;
            background-repeat: no-repeat;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>

<script>
import Bus from '../assets/js/eventBus'
import { i18n } from '../i18n/config'
export default {
  data () {
    return {
      langClose: false, // 语言切换
      userOpenFlag: false,
      navOpenFlag: false,
      navAnimate: false,
      curLang: '',
      curIcon: '',
      lanActive: 2,
      navShow: false, // 导航栏隐藏
      opacityFlag: false,
      isHome: false,
      isLogo: false,
      curRoute: this.$route.path,
      closeFlag: 1,
      pcLangClose: false,
      scrollTopFlag: false,
      routerFlag: false,
      langList: [
        {
          lang: '简体中文',
          tag: 'CN'
        },
        {
          lang: 'English',
          tag: 'EN'
        },
        {
          lang: 'Deutsch', // 德语
          tag: 'DE'
        },
        {
          lang: 'Русский язык', // 俄语
          tag: 'RU'
        },
        {
          lang: '한국어', // 韩语
          tag: 'KR'
        },
        {
          lang: '日本語', // 日语
          tag: 'JP'
        },
        {
          lang: 'español', // 西班牙语
          tag: 'ES'
        }
      ],
      navClose: false
    }
  },
  mounted () {
    let Qlang = localStorage.getItem('Qlang')
    // console.log(Qlang)
    for (let i in this.langList) {
      if (Qlang === this.langList[i].tag) {
        this.curLang = this.langList[i].lang
      }
    }
  },
  methods: {
    open () {
      this.$emit('open')
    },
    // 选择语言
    changeLang (item) {
      this.curLang = item.lang
      this.lanActive = 1
      localStorage.setItem('Qlang', item.tag)
      i18n.locale = item.tag
      window.location.reload()
    },
    // 切换菜单
    checkMenu () {
      this.closeFlag++
      this.pcLangClose = false
      if (this.closeFlag > 2) {
        this.closeFlag = 1
      }
    },
    // 开关下拉菜单
    checkDownMenu (item, index) {
      // console.log(index)
      this.$t('header.navList')[index].dropDownFlag = !this.$t('header.navList')[index].dropDownFlag
      // console.log(this.$t('header.navList')[index].dropDownFlag)
      this.$router.push({
        path: item.path,
        query: {anchor: ''}
      })
      if (index !== 0 && index !== 1 && index !== 4) {
        this.closeFlag = false
      }
    },
    jumpRouter (item) {
      this.$router.push({
        path: item.path,
        query: {anchor: ''}
      })
    },
    jump (path, dropPath, anchor) {
      if (path !== this.curRoute) {
        this.$router.push({
          path: path,
          query: {
            anchor: anchor
          }
        })
      } else {
        if (!dropPath) {
          Bus.$emit('clickDropNav', (anchor))
        } else {
          this.$router.push(dropPath)
        }
      }
    },
    jump2 (path, dropPath, anchor) {
      if (path !== this.curRoute) {
        this.$router.push({
          path: path,
          query: {
            anchor: anchor
          }
        })
      } else {
        if (!dropPath) {
          Bus.$emit('clickDropNav', (anchor))
        } else {
          this.$router.push(dropPath)
        }
      }
      this.closeFlag = false
    }
  },
  watch: {
    $route (to, from) {
      this.curRoute = to.path
      if (to.path === '/home') {
        this.routerFlag = true
      } else {
        this.routerFlag = false
      }
    }
  }
}
</script>
