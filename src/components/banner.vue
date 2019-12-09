  <template>
    <div class="banner container_lin">
      <div class="content-box">
          <div class="con-box">
            <div class="content Plateia-Bold">{{$t('home.text1')}}</div>
            <div class="video-btn" v-show="!show" @click="modalboxs"><img src="../assets/images/banner/play.svg" alt=""></div>
          </div>
          <div class="modalboxs" v-show="show">
            <div class="vide" v-show="show">
              <div class="vide-box">
                <div class="close" @click="close"><img src="../../static/img/shut.svg" alt=""></div>
                <div class="video-wrapper">
                  <div class="video-box">
                    <!--<video class="video" ref="indexVideo" controls x5-video-player-type='h5'>-->
                      <!--<source :src='videoMP4' type='video/mp4'>-->
                    <!--</video>-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     <!--<video autoplay="autoplay" poster="../assets/images/new_home/Background1.png" webkit-playsinline playsinline muted loop id="bgvid">-->
        <!--<source src="../assets/images/new_home/video/background_resize.mp4" type="video/mp4"/>-->
      <!--</video>-->
    </div>
</template>

<script type="text/ecmascript-6">
import { i18n } from '../i18n/config'
export default {
  data () {
    return {
      timer: '',
      newArr: [],
      language: 1,
      pageIndex: '',
      pageSize: 3,
      pageNo: 1,
      totalPage: 0,
      show: false,
      videosMp4: '',
      isplayS: true,
      videoMP4: ''
      // videoCN: require('../../static/video/quin-cn.mp4'),
      // videoEN: require('../../static/video/quin-en.mp4')
    }
  },
  created () {
    if (i18n.locale === 'CN') {
      this.language = 1
      // this.videoMP4 = this.videoCN
    } else {
      this.language = 2
      // this.videoMP4 = this.videoEN
    }
  },
  mounted () {
    this.$nextTick(() => {
      document.addEventListener('scroll', this.getScrollTop)
    })
  },
  watch: {
    destroyed () {
      document.removeEventListener('scroll', this.getScrollTop)
    }
  },
  methods: {
    closeNews (index) {
      this.$t('header.newsList')[index].show = false
    },
    modalboxs () {
      this.show = true
      document.getElementsByTagName('body')[0].style = 'overflow: hidden;'
      this.scrollTop = window.pageYOffset || document.body.scrollTop
      if (this.scrollTop > 0) {
        this.getScrollTop()
      }
    },
    close () {
      this.show = false
      document.getElementsByTagName('body')[0].style = ''
      this.$refs.indexVideo.pause()
    },
    playVideo () { // 暂停时,视频播放按钮显示
      this.$refs.indexVideo.controls = true
    },
    isPlay () {
      if (this.$refs.indexVideo.paused) { // 已经暂停视频
        this.playVideo() // 播放调用方法
      } else {
        this.$refs.indexVideo.pause() // 暂停
      }
    },
    getScrollTop () {
      let _that = this
      let scrollTop = window.pageYOffset || document.body.scrollTop
      this.timer = setInterval(() => {
        if (_that.scrollTop > 0) {
          _that.scrollTop -= 50
          document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop
        }
        if (scrollTop === 0) {
          clearInterval(this.timer)
        }
      }, 100)
    }
  }
}
</script>

<style lang="less" scoped>
  .banner{
    width: 100%;
    height: auto;
    position: relative;
      .content-box{
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 200;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        justify-content: center;
        .con-box{
          .content{
            width: 1034px;
            text-align: center;
            font-size: 43px;
            font-weight: bold;
            color: #ffc100;
            @media screen and (max-width: 1024px){
              width: 100%;
              font-size: 18px;
            }
          }
          .video-btn{
            width: 100%;
            text-align: center;
            cursor: pointer;
            img{
              display: inline-block;
              width: 88px;
              height: 88px;
              margin: auto;
              margin-top: 44px;
              @media screen and (max-width: 1024px){
                width: 60px;
                height: 60px;
                margin-top: 5px;
                font-size: 18px;
              }
            }
          }
        }
        .modalboxs {
          position: fixed;
          width: 100%;
          height: 100vh;
          z-index: 150;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, .5);
          .vide {
            width: 842px;
            height: auto;
            box-shadow: 0 0 8px 2px rgba(255, 255, 255, 0.6);
            position: absolute;
            z-index: 160;
            top: 35%;
            left: 50%;
            transform: translate(-50%, -50%);
            &:hover {
              transition: all 0.4s ease;
              box-shadow: 0 0 20px 3px rgba(255, 255, 255, 0.6);
            }
            @media screen and (max-width: 1024px){
              width: 100%;
            }
            .vide-box {
              width: 100%;
              height: 100%;
              position: relative;
              z-index: 160;
              .close {
                width: 30px;
                height: 30px;
                position: absolute;
                top: -32px;
                right: -32px;
                cursor: pointer;
                z-index: 200;
                font-size: 20px;
                color: #f2c130;
                @media screen and (max-width: 1024px) {
                  right: 0;
                  top: -40px;
                  width: 40px;
                  height: 40px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }
                img {
                  display: block;
                  width: 30px;
                  @media screen and (max-width: 914px) {
                    width: 20px;
                  }
                }
              }
              .video-wrapper {
                width: 100%;
                height: 100%;
                @media only screen and (max-width: 842px) {
                  width: 100%;
                }
                .video-box {
                  width: 100%;
                  height: 100%;
                  background: url("../../static/img/video_bg.png") no-repeat;
                  background-size: cover;
                  font-size: 0;
                  .video {
                    width: 100%;
                  }
                  //去掉video下载按钮
                  video::-internal-media-controls-download-button {
                    display: none;
                  }
                  video::-webkit-media-controls-enclosure {
                    overflow: hidden;
                  }
                  video::-webkit-media-controls-panel {
                    width: calc(100% + 30px);
                  }
                }
              }
            }
          }
        }
      }
    #bgvid {
      width: auto;
      height: auto;
      min-width: 100%;
      //background: url("../assets/images/new_home/Background1.png") no-repeat;
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;
      &::-webkit-media-controls {
        display:none !important;
      }
      @media screen and (max-width: 1024px) {
        width: 100%;
        height: auto;
      }
    }
  }
</style>
