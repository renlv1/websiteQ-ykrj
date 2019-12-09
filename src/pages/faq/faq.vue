<template>
  <div class="faq">
    <div class="banner"></div>
    <div class="title">{{$t('faq.title')}}</div>
    <div class="FAQ-box">
      <div class="list" v-for="(item,index) in $t('faq.issueData')" :key="index">
        <div class="issue-box">
          <span class="issue"><i>{{item.issueName}} : </i> {{item.title}}</span>
          <div class="unfold-box" @click="unfoldShow(index)">
            <span class="unfold" :class="{'jia':indexActive !== index,'jian':indexActive == index}"></span>
          </div>
        </div>
        <div class="answer" :class="{answerActive: indexActive === index}">
          <div class="answer-content" ref="mybox">
            <i>{{item.answerName}} :</i>{{item.text}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      jian: 'jian',
      jia: 'jia',
      indexActive: -1
    }
  },
  methods: {
    unfoldShow (index) {
      let maxHeight = this.$refs.mybox[index].offsetHeight
      setTimeout(() => {
        this.indexActive = index
        this.$refs.mybox[index].style.height = maxHeight
      }, 300)
    }
  }
}
</script>

<style lang="less" scoped>
  .faq{
    width: 100%;
    height: auto;
    overflow: hidden;
    background-color: #ffffff;
    .banner{
      width: 100%;
      height: 500px;
      background: url("../../assets/images/faq/ask-img-banner.png") no-repeat;
      background-size: cover;
      background-position: center;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .title{
      text-align: center;
      padding: 140px 0 90px;
      color: #997817;
      font-size: 30px;
    }
    .FAQ-box{
      width: 1100px;
      padding-left: 50px;
      padding-right: 50px;
      height: auto;
      overflow: hidden;
      margin: 0 auto;
      padding-bottom: 120px;
      @media screen and (max-width: 1040px) {
        width: 100%;
        padding: 0 20px;
      }
      .list{
        width: 100%;
        height: auto;
        overflow: hidden;
        margin-bottom: 40px;
        border: 1px solid #bfbfbf;
        padding: 0 50px;
        border-radius: 6px;
        @media screen and (max-width: 1040px) {
          width: 100%;
          padding: 0 20px;
        }
        .issue-box{
          width: 100%;
          height: auto;
          padding: 29px 0;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .issue{
            color: #4d4d4d;
            @media screen and (max-width: 700px) {
              display: inline-block;
              width: 100%;
              line-height: 1.2;
              font-size: 14px;
            }
            i{
              padding-right: 10px;
            }
          }
          .unfold-box{
            width: 30px;
            height: 30px;
            cursor: pointer;
            @media screen and (max-width: 1024px){
              width: 20px;
              height: 20px;
              margin-left: 5px;
            }
            .unfold{
              display: inline-block;
              width: 30px;
              cursor: pointer;
              @media screen and (max-width: 1024px){
                width: 20px;
              }
            }
            .jian{
              height: 30px;
              background: url("../../assets/images/home/minus.svg") no-repeat;
              background-size: auto;
              @media screen and (max-width: 1024px){
                height: 20px;
              }
            }
            .jia{
              height: 30px;
              background: url("../../assets/images/home/add.svg") no-repeat;
              background-size: auto;
              @media screen and (max-width: 1024px){
                height: 20px;
              }
            }
          }
        }
        .answer{
          width: 900px;
          height: 0;
          box-sizing: content-box;
          padding-top: 0;
          padding-bottom: 0;
          overflow: hidden;
          transition: all .4s linear;
          &.answerActive {
            height: auto;
            padding-top: 30px;
            padding-bottom: 44px;
            border-top: 1px solid #e6e6e6;
          }
          @media screen and (max-width: 1040px) {
            width: 100%;
          }
          .hr{
            width: 900px;
            height: 1px;
            background-color: #e6e6e6;
            margin: 0 auto 30px;
          }
          .answer-content{
            width: 100%;
            height: auto;
            overflow: hidden;
            line-height: 1.5;
            font-size: 16px;
            color: #4d4d4d;
            font-weight: 300;
            transition: all .4s linear;
            @media screen and (max-width: 1024px){
              font-size: 15px;
              line-height: 1.2;
            }
            i{
              padding-right: 10px;
            }
          }
        }
      }
    }
  }
</style>
