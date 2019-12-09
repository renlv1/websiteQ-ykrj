<template>
  <div id="app" >
      <v-header ref="header" class="head" @open="bodyMove" :class="{'right': bodyRight}"></v-header>
      <div :class="{'right': bodyRight}" class="content">
        <router-view/>
        <v-footer v-if="footerShow"></v-footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      bodyRight: false,
      bodyLeft: false,
      footerShow: true

    }
  },
  methods: {
    bodyMove () {
      this.bodyRight = !this.bodyRight
    }
  },
  mounted () {
    if (this.$route.path === '/home') {
      this.footerShow = false
    } else {
      this.footerShow = true
    }
  },
  components: {
    vHeader: resolve => require(['./components/header.vue'], resolve),
    vFooter: resolve => require(['./components/footer.vue'], resolve)
  },
  watch: {
    $route (to, from) {
      if (to.path === '/home') {
        this.footerShow = false
      } else {
        this.footerShow = true
      }
    }
  }
}
</script>

<style lang="less">
  @import "assets/css/common.css";
  .head{
    @media screen and (max-width: 1024px) {
      transition: transform 0.5s;
      transform: translate(0, 0);
      &.right{
        transform: translate(-60%, 0);
      }
    }
  }
  .content{
    @media screen and (max-width: 1024px) {
      transition: transform 0.5s;
      transform: translate(0, 0);
      &.right{
        transform: translate(-60%, 0);
      }
    }
  }
</style>
