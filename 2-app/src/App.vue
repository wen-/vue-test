<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-y: auto;
  position: relative;
  z-index: 1;
}
.m {
  max-width: 1200px;
  margin: 0 auto;
}
.publicNav a.router-link-active{
    color: #333;
  }
</style>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import smoothwheel from "../public/js/smoothwheelES6";

let sw;
export default {
  components: {
    Footer,
    Header
  },
  data() {
    return {
      test: 123
    };
  },
  mounted() {
    // sw = new smoothwheel({ elem: "app" });
    // window.addEventListener('resize',function () {
    //   sw.disabled();
    //   sw = new smoothwheel({ elem: "app" });
    // });
  },
  computed: {},
  methods: {},
  watch: {
    // $route: function() {
    //   if(this.$route.name == "home"){
    //     setTimeout(function () {
    //       sw && sw.disabled();
    //       sw = new smoothwheel({ elem: "app" });
    //     },100);
    //   }
    // }
  }
};
</script>
