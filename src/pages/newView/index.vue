<template>
  <div class="newView">
    <div class="banner">
      <div class="wrap">
        <div class="title">
          <h3>{{$t('newViewPage.context1')}}</h3>
          <p>
            {{$t('newViewPage.context2')}}
          </p>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="title">{{$t('newViewPage.context3')}}</div>
      <div class="list">
        <div class="lis-info" v-for="(item, index) in newArr" :key="index" @click="viewMore(item.id)">
          <div class="imgbox"> <img :src="'http://image.9mn3n.cn/' + item.coverImgUrl" alt=""></div>
          <div class="con">
            <div class="text">{{item.title}}</div>
            <div class="more-r">
              <span class="ico"></span><span class="lik">MORE</span>
            </div>
          </div>
        </div>
      </div>
      <div class="page">
        <span @click="jumpPage('frist')" :class="{'disable':pageNo==1}">{{$t('newViewPage.text14')}}</span>
        <span @click="jumpPage('pre')" :class="{'disable':!(pageNo > 1)}">{{$t('newViewPage.text10')}}</span>
        <span @click="jumpPage('next')" :class="{'disable':!(pageNo < totalPage)}">{{$t('newViewPage.text11')}}</span>
        <span @click="jumpPage('last')" :class="{'disable':pageNo == totalPage}">{{$t('newViewPage.text12')}}</span>
        <span>{{pageNo}} / {{totalPage}}</span>
        <span>
          <input type="tel" v-model="pageIndex">
        </span>
        <span @click="jumpPage('jump')">{{$t('newViewPage.text13')}}</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .newView{
    width: 100%;
    height: auto;
    overflow: auto;
    background-color: #fff;
    .banner{
      background-color: #000;
      background-image: url("../../assets/images/newView/new-img-banner.png");
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
      width: 1236px;
      height: auto;
      overflow: auto;
      margin: 150px auto 140px;
      @media screen and (max-width: 1276px){
        width: 100%;
        padding: 0 20px;
      }
      .title{
        font-size: 30px;
        text-align: center;
        color: #997817;
      }
      .list{
        width: 100%;
        height: auto;
        padding: 90px 0 140px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        @media screen and (max-width: 1024px) {
          justify-content: space-around;
        }
        .lis-info{
          width: 380px;
          margin-right: 30px;
          margin-bottom: 36px;
          transition: all 0.4s ease-in-out;
          cursor: pointer;
          @media screen and (max-width: 768px){
            width: 100%;
            height: auto;
            overflow: hidden;
          }
          &:hover{
            box-shadow: 0 6px 6px rgba(0,0,0,.1);
          }
          .imgbox{
            width: 100%;
            /*height: 300px;*/
            @media screen and (max-width: 622px){
              height: auto;
            }
            img{
              width: 100%;
              height: 100%;
              vertical-align: middle;
            }
          }
          .con{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding-left: 20px;
            height: 130px;
            border: 1px solid #ececec;
            border-top: none;
            @media screen and (max-width: 622px){
              overflow: hidden;
            }
            .text{
              display: -webkit-box;
              width: 60%;
              line-height: 1.5;
              font-size: 16px;
              color: #4d4d4d;
              overflow : hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              @media screen and (max-width: 622px){
                width: 50%;
              }
            }
            .more-r{
              width: 35%;
              display: flex;
              align-items: center;
              justify-content: flex-end;
              padding-right: 30px;
              @media screen and (max-width: 768px) {
                padding-right: 15px;
              }
              .ico{
                display: inline-block;
                cursor: pointer;
                width: 20px;
                height: 20px;
                margin-right: 14px;
                background-image: url("../../assets/images/newView/more.svg");
              }
              .lik{
                cursor: pointer;
                font-size: 16px;
                line-height: 20px;
                color: #cba22d;
                /*padding: 0 38px 16px 14px;*/
              }
            }
          }
        }
      }
      .page{
        display: flex;
        height: 30px;
        justify-content: center;
        font-size: 18px;
        span{
          color: #cba22d;
          display: inline-block;
          cursor: pointer;
          padding: 0 15px;
          height: 30px;
          &:nth-child(1) {
            @media screen and (max-width: 767px) {
              display: none;
            }
          }
          &:nth-child(4) {
            @media screen and (max-width: 767px) {
              display: none;
            }
          }
          &:nth-child(5) {
            @media screen and (max-width: 767px) {
              display: none;
            }
          }
          &:nth-child(6) {
            @media screen and (max-width: 767px) {
              display: none;
            }
          }
          &:nth-child(7) {
            @media screen and (max-width: 767px) {
              display: none;
            }
          }
          &.disable{
            color: #ccc;
          }
          input{
            height: 20px;
            width: 45px;
          }
        }
      }
    }
  }
</style>

<script>
import Bus from '../../assets/js/eventBus'
import axios from 'axios'
export default{
  data () {
    return {
      newArr: [],
      language: 2,
      pageIndex: '',
      pageSize: 6,
      pageNo: 1,
      totalPage: 0
    }
  },
  mounted () {
    this.getNoticeList2()
  },
  created () {
    if (localStorage.getItem('Qlang') === 'CN') {
      this.language = 1
    } else {
      this.language = 2
    }
    Bus.$on('headerChangeLang', (e) => {
      if (e === 'CN') {
        this.language = 1
      } else {
        this.language = 2
      }
    })
  },
  methods: {
    /* eslint-disable */
    viewMore (id) {
      this.$router.push({
        path: '/newsDetail',
        query: {
          id: id
        }
      })
    },
    jumpPage (flag) {
      let self = this
      switch (flag) {
        case 'frist':
          if (self.pageNo !== 1) {
            self.pageNo = 1
            self.getNoticeList2()
          }
          break
        case 'pre':
          if (self.pageNo > 1) {
            self.pageNo--
            self.getNoticeList2()
          }
          break
        case 'next':
          if (self.pageNo < self.totalPage) {
            console.log('dd')
            self.pageNo++
            self.getNoticeList2()
          }
          break
        case 'last':
          if (self.pageNo !== self.totalPage) {
            self.pageNo = self.totalPage
            self.getNoticeList2()
          }
          break
        case 'jump':
          if (self.pageIndex > 0 && self.pageIndex <= self.totalPage) {
            self.pageNo = self.pageIndex
            self.getNoticeList2()
          }
          break
      }
    },
    /*getNewInfo () {
      let Url = `http://web.exploitsmart.com/official/preQueryOfficialWeb?terrace=3 &language=${this.language}&pageIndex=${this.pageNo}&pageSize=${this.pageSize}`
      axios.get(Url).then(res => {
        if (res.data.status === 'success' && res.data.success === true) {
          this.newArr = res.data.data.results
          this.totalPage = res.data.data.totalPage
        }
      }).catch(err => {
        console.log(err)
      })
    },*/
    getNoticeList2 (page) {
      let baseUrl = 'https://api.kleingame.ai'
      let url = `${baseUrl}/notice/noticeListNew?pageSize=${this.pageSize}&pageIndex=${this.pageNo}&terrace=3&language=${this.language}`
      axios.post(url).then((res) => {
        this.isLoading = false // 加载动画
        let ndata = res.data.data
        if (ndata.totalPage) {
          this.newArr = ndata.noticeList
          this.totalPage = ndata.totalPage
        } else {
          let newdata = JSON.parse(ndata)
          this.newArr = newdata.noticeList
          this.totalPage = newdata.totalPage
        }
      }).catch(() => {
      })
    },
    getCreateTime (val) { // 日期
      let m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Spt', 'Oct', 'Nov', 'Dec']
      let newTime = new Date(val)
      let day = newTime.getDate()
      let month = newTime.getMonth()
      let year = newTime.getFullYear()
      return m[month] + ' ' + day + '.' + year
    },
    tabToggle (index) {
      this.page = index
    }
  }
}
</script>
