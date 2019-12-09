<template>
  <div class="qWiki">
    <div class="banner">
      <div class="wrap">
        <div class="title">
          <h3>{{$t('wike.text1')}}</h3>
          <p>
            {{$t('wike.text2')}}
          </p>
        </div>
      </div>
    </div>
    <div class="wrap">
      <div class="content">
        <div class="content-box">
          <!--1.Quin简介-->
          <div class="dropIntroduction" >
            <h3 class="title"><span class="light-bold">1.{{$t('wike.text3')}}</span><i></i></h3>
            <div class="introductionCont flexCenter">
              <p>{{$t('wike.text4')}}</p>
              <div class="imgBox">
                <img src="../../assets/images/wiki/1.svg" alt="">
              </div>
            </div>
          </div>
          <div class="childPrice">
            <h3 class="title"><span>{{$t('wike.text5')}}</span><i></i></h3>
            <div class="priceCont flexCenter">
              <div class="imgBox">
                <img src="../../assets/images/wiki/1.1.svg" alt="">
              </div>
              <div class="priceContRight">
                <h6 class="light-bold">{{$t('wike.text6')}}</h6>
                <p>{{$t('wike.text7')}}</p>
                <p>{{$t('wike.text8')}}</p>
              </div>
            </div>
          </div>
          <div class="childScale mt-60">
            <h3 class="title"><span>{{$t('wike.text9')}}</span><i></i></h3>
            <div class="scaleCont flexCenter">
              <div class="imgBox">
                <img :src="$t('wike.imgUrl.img1')" alt="">
              </div>
              <div class="contRight">
                <p class="light-bold">{{$t('wike.text10')}}</p>
              </div>
            </div>
          </div>
          <div class="childStructure mt-60">
            <h3 class="title"><span>{{$t('wike.text11')}}</span><i></i></h3>
            <div class="imgBox">
              <img :src="$t('wike.imgUrl.img2')" alt="">
            </div>
          </div>
          <!--Quin的设计理念-->
          <div class="dropPhilosophy mt-60">
            <h3 class="title"><span class="light-bold">2.{{$t('wike.text12')}}</span><i></i></h3>
            <div class="philosophyCont flexCenter">
              <div class="imgBox">
                <img src="../../assets/images/wiki/2.svg" alt="">
              </div>
              <div class="contRight">
                <p>{{$t('wike.text13')}}</p>
              </div>
            </div>
          </div>
          <div class="childValue mt-60">
            <h3 class="title"><span>{{$t('wike.text14')}}</span><i></i></h3>
            <div class="philosophyCont flexCenter">
              <div class="contRight">
                <p>
                  {{$t('wike.text15')}}
                </p>
              </div>
              <div class="imgBox">
                <img src="../../assets/images/wiki/2.1.svg" alt="">
              </div>
            </div>
          </div>
          <div class="childFlow mt-60">
            <h3 class="title"><span>{{$t('wike.text16')}}</span><i></i></h3>
            <h6>{{$t('wike.text17')}}</h6>
            <div class="imgBox">
              <img :src="$t('wike.imgUrl.img3')" alt="">
            </div>

          </div>
          <div class="childAdvantages mt-60">
            <h3 class="title"><span>{{$t('wike.text18')}}</span><i></i></h3>
            <ul>
              <li v-for="(item,index) in $t('wike.childAdvantages')" :key="index">{{item.text}}</li>
            </ul>
          </div>
          <!--资产组合和资产选择-->
          <div class="dropAsset" >
            <h3 class="title"><span class="light-bold">3.{{$t('wike.text19')}}</span><i></i></h3>
            <ul>
              <li v-for="(item, index) in $t('wike.dropAsset')" :key="index"><i :style="{backgroundImage:'url(' + item.img + ')'}"></i>{{item.text}}</li>
            </ul>
          </div>
          <div class="childSelect">
            <h3 class="title"><span>{{$t('wike.text20')}}</span><i></i></h3>
            <h6>{{$t('wike.text21')}}</h6>
            <div class="imgBox">
              <img :src="$t('wike.imgUrl.img4')" alt="">
            </div>
          </div>
          <div class="childInvesting mt-60" >
            <h3 class="title"><span>{{$t('wike.text22')}}</span><i></i></h3>
            <h6>{{$t('wike.text23')}}</h6>
            <ul>
              <li v-for="(item, index) in $t('wike.childInvesting')" :key="index">
                <div class="imgBox">
                  <img :src="item.img" alt="">
                </div>
                <h5 class="light-bold">{{item.title}}</h5>
                <p>{{item.text}}</p>
              </li>
            </ul>
          </div>
          <div class="childCash mt-60">
            <h3 class="title"><span>{{$t('wike.text24')}}</span><i></i></h3>
            <div class="imgBox">
              <img :src="$t('wike.imgUrl.img5')" alt="">
            </div>
            <p>{{$t('wike.text25')}}</p>
          </div>
          <div class="childCity mt-60">
            <h3 class="title"><span>{{$t('wike.text26')}}</span><i></i></h3>
            <h6>{{$t('wike.text27')}}</h6>
            <div class="imgBox">
              <img src="../../assets/images/wiki/3.4.png" alt="">
            </div>
          </div>
          <div class="childGoal mt-60">
            <h3 class="title"><span>{{$t('wike.text28')}}</span><i></i></h3>
            <h6>{{$t('wike.text29')}}</h6>
            <ul>
              <li v-for="(item, index) in $t('wike.childGoal')" :key="index">
                <div class="imgBox">
                  <img :src="item.img" alt="">
                </div>
                <p class="light-bold">{{item.text}}</p>
              </li>
            </ul>
          </div>
          <!--业绩表现和分配-->
          <div class="dropPerformance mt-60">
            <h3 class="title"><span class="light-bold">4.{{$t('wike.text30')}}</span><i></i></h3>
            <div class="performanceCont">
              <div class="cont1 flexCenter">
                <div class="contRight">
                  <p>{{$t('wike.text31')}}</p>
                </div>
                <div class="imgBox">
                  <img src="../../assets/images/wiki/4-1.svg" alt="">
                </div>
              </div>
              <div class="cont2 flexCenter">
                <div class="imgBox">
                  <img src="../../assets/images/wiki/4-2.svg" alt="">
                </div>
                <div class="contRight">
                  <p>{{$t('wike.text32')}}</p>
                  <p>{{$t('wike.text33')}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="childDistribution mt-60">
            <h3 class="title"><span>{{$t('wike.text34')}}</span><i></i></h3>
            <div class="imgBox">
              <img :src="$t('wike.imgUrl.img6')" alt="">
            </div>
          </div>
          <div class="childCase mt-60">
            <h3 class="title"><span>{{$t('wike.text35')}}</span><i></i></h3>
            <h6>{{$t('wike.text36')}}</h6>
            <ul>
              <li v-for="(item, index) in $t('wike.childCase')" :key="index">{{item.text}}</li>
            </ul>
          </div>
          <!--Quin的共识机制-->
          <div class="mt-60 dropConsensus">
            <h3 class="title"><span class="light-bold">5.{{$t('wike.text37')}}</span><i></i></h3>
            <div class="performanceCont">
              <div class="cont1 flexCenter">
                <div class="contRight">
                  <p>{{$t('wike.text38')}}</p>
                </div>
                <div class="imgBox">
                  <img src="../../assets/images/wiki/5-1.svg" alt="">
                </div>
              </div>
              <div class="cont2 flexCenter">
                <div class="imgBox">
                  <img src="../../assets/images/wiki/5-2.svg" alt="">
                </div>
                <div class="contRight">
                  <p>{{$t('wike.text39')}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="childVision mt-60">
            <h3 class="title"><span>{{$t('wike.text40')}}</span><i></i></h3>
            <div class="visionCont flexEnd">
              <div class="imgBox">
                <img src="../../assets/images/wiki/5.1.svg" alt="">
              </div>
              <div class="cont">
                <p>{{$t('wike.text41')}}</p>
              </div>
            </div>
          </div>
          <div class="childMain mt-60">
            <h3 class="title"><span>{{$t('wike.text42')}}</span><i></i></h3>
            <h6>{{$t('wike.text43')}}</h6>
            <div class="performanceCont">
              <div class="cont1 flexCenter">
                <div class="contRight">
                  <p>{{$t('wike.text44')}}</p>
                </div>
                <div class="imgBox">
                  <img src="../../assets/images/wiki/5-1.svg" alt="">
                </div>
              </div>
              <div class="cont2 flexCenter">
                <div class="imgBox">
                  <img src="../../assets/images/wiki/5-2.svg" alt="">
                </div>
                <div class="contRight">
                  <p>{{$t('wike.text45')}}</p>
                </div>
              </div>
            </div>
            <h6>{{$t('wike.text46')}}</h6>
            <div class="imgBox mt-40">
              <img :src="$t('wike.imgUrl.img8')" alt="">
            </div>
            <ul>
              <li v-for="(item, index) in $t('wike.childMain')" :key="index">
                {{item.text}}
              </li>
            </ul>
            <h6 class="mt-40">{{$t('wike.text47')}}</h6>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap2">
      <div class="content-nav" :class="{'leftShow':navShow}">
        <ul class="nav-ul">
          <b :style="{top:arrowsTop + 'px'}"></b>
          <li class="nav-li" v-for="(item, index1) in $t('header.navList[1].dropDown')" :key="index1" @click="jumpAnchor2(item.anchor)">
            <h6>{{index1 + 1}}.{{item.name}}</h6>
            <ul>
              <li v-for="(drop, index) in item.childer" :key="index" @click.stop="jumpAnchor2(drop.anchor)">
                  <span>
                    {{drop.name}}
                  </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @import "wike";
</style>

<script>
import Bus from '../../assets/js/eventBus'
export default{
  data () {
    return {
      navListArr: [],
      navShow: false,
      arrowsTop: 15,
      anchor: this.$route.query.anchor,
      dropDown: [
        {
          anchor: 'dropIntroduction',
          top: 15,
          childer: [
            {
              anchor: 'childPrice',
              top: 55
            },
            {
              anchor: 'childScale',
              top: 89
            },
            {
              anchor: 'childStructure',
              top: 123
            }

          ]
        },
        {
          anchor: 'dropPhilosophy',
          top: 157,
          childer: [
            {
              anchor: 'childValue',
              top: 197
            },
            {
              anchor: 'childFlow',
              top: 231
            },
            {
              anchor: 'childAdvantages',
              top: 265
            }

          ]
        },
        {
          anchor: 'dropAsset',
          top: 299,
          childer: [
            {
              anchor: 'childSelect',
              top: 339
            },
            {
              anchor: 'childInvesting',
              top: 373
            },
            {
              anchor: 'childCash',
              top: 407
            },
            {
              anchor: 'childCity',
              top: 441
            },
            {
              anchor: 'childGoal',
              top: 475
            }
          ]
        },
        {
          anchor: 'dropPerformance',
          top: 509,
          childer: [
            {
              anchor: 'childDistribution',
              top: 549
            },
            {
              anchor: 'childCase',
              top: 583
            }
          ]
        },
        {
          anchor: 'dropConsensus',
          top: 617,
          childer: [
            {
              anchor: 'childVision',
              top: 657
            },
            {
              anchor: 'childMain',
              top: 691
            }
          ]
        }
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.jumpAnchor()
      Bus.$on('clickDropNav', (anchor) => {
        document.querySelector('.' + anchor).scrollIntoView(true)
      })
      document.addEventListener('scroll', this.getKlass)
    })
  },
  watch: {
    $route (to, from) {
      this.anchor = to.query.anchor
      this.jumpAnchor()
    }
  },
  destroyed () {
    document.removeEventListener('scroll', this.getKlass)
  },
  methods: {
    jumpAnchor2 (anchor) {
      document.querySelector('.' + anchor).scrollIntoView(true)
    },
    jumpAnchor () {
      if (this.anchor) {
        document.querySelector('.' + this.anchor).scrollIntoView(true)
      }
    },
    getKlass () {
      let arr = []
      for (let i in this.dropDown) {
        var obj = {}
        obj.anchor = this.dropDown[i].anchor
        obj.offsetVal = document.querySelector('.' + obj.anchor).offsetTop
        obj.top = this.dropDown[i].top
        arr.push(obj)
        for (let j in this.dropDown[i].childer) {
          var obj2 = {}
          obj2.anchor = this.dropDown[i].childer[j].anchor
          obj2.offsetVal = document.querySelector('.' + obj2.anchor).offsetTop
          obj2.top = this.dropDown[i].childer[j].top
          arr.push(obj2)
        }
      }
      this.navListArr = arr
      let _scrollTop = document.documentElement.scrollTop
      if (this.getInterpolation(_scrollTop)) {
        var _index = Number(this.getInterpolation(_scrollTop))
        this.arrowsTop = this.navListArr[_index].top
      }
      if (_scrollTop > 434 && _scrollTop < 10000) {
        this.navShow = true
      } else {
        this.navShow = false
      }
    },
    getInterpolation (_scrollTop) {
      let Interpolation = []
      for (let i in this.navListArr) {
        Interpolation.push(Number(this.navListArr[i].offsetVal) - Number(_scrollTop))
      }
      for (let i in Interpolation) {
        if (Interpolation[i] >= 0) {
          return Number(i)
        }
      }
    },
    stop () {
      this.$refs.swiperOne.swiper.stopAutoplay()
    },
    start () {
      this.$refs.swiperOne.swiper.startAutoplay()
    }
  }
}
</script>
