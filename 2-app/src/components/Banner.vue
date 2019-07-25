<template>
  <div class="bannerBox">
      <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide s1"></div>
              <div class="swiper-slide s2"></div>
              <div class="swiper-slide s3"></div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
          <!-- Add Arrows -->
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
      </div>
  </div>
</template>
<style type="text/css" scoped>
    .bannerBox {
        /*width: 600px;*/
        height: 400px;
    }
    .swiper-container {
        width: 100%;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    .s1,.s2,.s3{
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .s1{
        background-image: url("../assets/img/banner.png");
    }
    .s2{
        background-image: url("../assets/img/banner2.png");
    }
    .s3{
        background-image: url("../assets/img/banner3.png");
    }
</style>
<script>
import "swiper/dist/css/swiper.min.css";
import langs from "../mixins/langs";
import Swiper from "swiper";

export default {
  name: "Banner",
  data() {
    return {};
  },
  mixins: [langs],
  created() {
    // this.initSwiper();
  },
    mounted(){
        this.initSwiper();
    },
  computed: {},
  methods: {
    initSwiper() {
      this.bannerSwiper = new Swiper('.swiper-container', {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          pagination: {
              el: '.swiper-pagination',
              clickable: true,
          },
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
          },
      });
    }
  },
  watch: {}
};
</script>
