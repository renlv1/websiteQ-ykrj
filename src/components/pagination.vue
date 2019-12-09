<template>
    <div class="pagination">
      <ul>
        <li :class="{'active': index === activenum}" v-for="(item, index) in paginationItems" :key="index" @click="selectNum(index)" style="">
          {{item.name}}
          <span :class="{'activeSpan': index === activenum}">
              <i :class="{'activeI': index === activenum}"></i>
            </span>
        </li>
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ['paginationItems', 'activenum'],
  data () {
    return {
      scollbar: require('../assets/images/scrollBar/head.png')
    }
  },
  methods: {
    selectNum (num) {
      this.$emit('changeActivenum', num)
    }
  }
}
</script>

<style lang="less" scoped>
.pagination{
  position: fixed;
  font-size: 16px;
  text-align: left;
  font-weight: bold;
  top: 140px;
  left: 157px;
  color: #8b8b8b;
  z-index: 100;
  @media screen and (max-width: 1044px){
    display: none;
  }
  li{
    width: 300px;
    position: relative;
    height: auto;
    cursor: pointer;
    transition: all .2s linear 0s;
    -webkit-transition: all .2s linear 0s;
    padding-top: 17px;
    padding-bottom: 17px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
    font-family: font1;
    &:hover{
      color: #f2c130;
      transition: all .2s ease-in 0s;
      -webkit-transition: all .2s linear 0s;
    }
    &:nth-child(1){
      color: #8b8b8b;
      &:hover{
        color: #f2c130;
      }
      &.active{
        color: #fff;
      }
    }
    &.active{
      padding-top: 20px;
      color: #f2c130;
      padding-bottom: 200px;
      transition: all 0.2s linear;
      @media screen and (max-width: 1500px){
        padding-bottom: 100px;
      }
    }
    &.activeONe{
      color: #fff;
    }
    span{
      position: absolute;
      top: 50%;
      left: -34px;
      display: inline-block;
      width: 14px;
      height: 14px;
      border-radius: 100%;
      transform: translateY(-50%);
      background-color: #e2e2e2;
      &.activeSpan{
         position: absolute;
         top: 34px;
         left: -41px;
         transform: translateY(-50%);
         width: 28px;
         height: 28px;
         border-radius: 100%;
         background: url("../assets/images/new_home/pitch.png") no-repeat;
      }
    }
  }
}
</style>
