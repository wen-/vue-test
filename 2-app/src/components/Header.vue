<template>
  <header class="publicHeader">
    <div class="headerM clearfix">
      <div class="m">
        <router-link to="/" exact class="logoBox lfloat">
          <img class="navLogo" src="../assets/img/nav_logo.png" alt="" />
        </router-link>
        <div class="changeLanguage rfloat relative flex rowCenter">
          <strong class="currentLanguage flex relative" @click="showLanguageBox">
            <img src="../assets/img/languageIcon.png" alt="" />{{this.$store.state.currentLanguage}}
          </strong>
          <ul class="languageBox" v-if="this.languageBox">
            <li @click="changeLang('简体中文')"><img src="../assets/img/languageIcon.png" alt="" />简体中文</li>
            <li @click="changeLang('English')"><img src="../assets/img/languageIcon.png" alt="" />English</li>
          </ul>
        </div>
        <nav class="publicNav rfloat" id="publicNav">
          <router-link to="/" exact id="nav_home">首页</router-link>
          <router-link to="/service" id="nav_service">区块链服务</router-link>
          <router-link to="/scene" id="nav_scene">应用场景</router-link>
          <router-link to="/about" id="nav_about">关于中所</router-link>
          <span class="navLine" id="navLine"></span>
        </nav>
      </div>
    </div>
  </header>
</template>

<style type="text/css" scoped>
.publicHeader {
  height: 5rem;
  position: relative;
}
.headerM {
  height: 5rem;
  width: 100%;
  position: fixed;
  z-index: 100;
  background-color: #fff;
  border-bottom: solid 1px #e6e6e6;
}
.navLogo {
  height: 4rem;
  margin-top: 0.5rem;
}
.publicNav{
  height: 5rem;
  display: flex;
  align-items: center;
}
.publicNav a{
  color: #b8b8b8;
  display: inline-block;
  margin-right: 5rem;
  font-size: 1.25rem;
}
.changeLanguage{
  height: 5rem;
  margin-right: 1rem;
}
.currentLanguage{
  height: 2.5rem;
  width: 7.5rem;
  border: solid 1px #ccc;
  color: #b8b8b8;
  font-weight: normal;
  font-size: 1rem;
  cursor: pointer;
  align-items: center;
  color: #333;
}
.currentLanguage img{
  margin: 0 5px 0 .5rem;
}
.currentLanguage:after{
  content: "";
  border-top: .4rem solid #333;
  border-left: .3rem solid transparent;
  border-right: .3rem solid transparent;
  border-bottom: 0;
  line-height: 0;
  font-size: 0;
  margin-left: .3rem;
  right: .5rem;
  position: absolute;
}
  .navLine{
    height: .25rem;
    background-color: #45ADF6;
    display: block;
    width: 2.5rem;
    position: absolute;
    z-index: 1;
    bottom: 1rem;
    transition-property: width, transform;
    transition-duration: 500ms, 500ms;
    transform: translateX(0);
  }
  .languageBox{
    width: 7.5rem;
    position: absolute;
    top: 4rem;
    border: solid 1px #ccc;
    text-align: left;
    background-color: #fff;
  }
.languageBox li{
  padding: .5rem;
  display: flex;
  align-items: center;
  transition: background 800ms;
  cursor: pointer;
  color: #b8b8b8;
}
.languageBox li:hover{
  background-color: #efefef;
  color: #333;
}
.languageBox li img{
  margin-right: .4rem;
}
</style>

<script>
import langs from "../mixins/langs";
export default {
  name: "Header",
  data() {
    return {
      languageBox: false
    };
  },
  mixins: [langs],
  // computed: {
  //     langs: function () {
  //         return this.$store.state.language[this.$store.state.currentLanguage];
  //     }
  // },
  methods: {
    showLanguageBox() {
      this.languageBox = true;
    },
    changeLang(n) {
      this.$store.commit("changeLanguage", n);
      this.languageBox = false;
    }
  },
  watch: {
    $route: function() {
      console.log("$route:", this.$route);
      const rName = this.$route.name;
      if(["home", "service", "scene", "about"].includes(this.$route.name)){
        const elemBox = document.getElementById('publicNav');
        const elem = document.getElementById('nav_'+rName);
        const line = document.getElementById('navLine');
        const boxOffL = elemBox.offsetLeft;
        const w = elem.clientWidth;
        const offL = elem.offsetLeft - boxOffL;
        line.style.cssText = `width: ${w}px; transform: translateX(${offL}px);`;
      }
    }
  }
};
</script>
