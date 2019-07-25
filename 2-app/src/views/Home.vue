<template>
  <div class="home">
    <Banner />
    <div class="m">
    <div class="ptBox1 ani">
      <p class="homeTxt1">
        <span>『</span>
        我们专注于区块链商业应用的孵化与落地，旨在帮助开发者快速构建区块链基础设施，提供区块链应用开发、部署、测试和监控的整套解决方案。
        <span>』</span>
      </p>
      <div class="picBox flex">
        <div class="pt f1 relative ptHover">
          <div class="aniIcon">
            <img class="relative" src="../assets/img/home_icon1.png" alt="" />
          </div>
          <div class="aniTxt relative">
            <h2>区块链普及化</h2>
            <p>我们专注于区块链商业应用的孵化与落地</p>
          </div>
        </div>

        <div class="pt f1 relative">
          <div class="aniIcon">
            <img class="relative" src="../assets/img/home_icon2.png" alt="" />
          </div>
          <div class="aniTxt relative">
            <h2>赋能传统互联网</h2>
            <p>提供区块链应用开发、部署、测试和监控的整套解决方案</p>
          </div>
        </div>

        <div class="pt f1 relative">
          <div class="aniIcon">
            <img class="relative" src="../assets/img/home_icon3.png" alt="" />
          </div>
          <div class="aniTxt relative">
            <h2>推动数字经济发展</h2>
            <p>立体链网，多行业区块链并行架构，性能高</p>
          </div>
        </div>

      </div>
    </div>

      <div class="aniBox2 flex">
        <div class="txtBox f1 flex">
          <div class="txtBoxIcon flex rowCenter">
            <img src="../assets/img/home_icon4.png" alt="" />
          </div>
          <h1>全面的区块链能力</h1>
          <ul>
            <li>容器化，函数化的区块链开发模式</li>
            <li>立体链网，多行业区块链并行架构，性能高</li>
            <li>全流程自动化运维，全天候稳定运行</li>
            <li>区块链技术专家团队倾力支持</li>
          </ul>
        </div>

        <div class="txtBox f1 flex">
          <div class="txtBoxIcon flex rowCenter">
            <img src="../assets/img/home_icon5.png" alt="" />
          </div>
          <h1 id="aniT2-0">丰富的场景支持</h1>
          <ul>
            <li>公有链、联盟链、私有链多场景完美支持</li>
            <li>金融、物联网、游戏等多行业区块链灵活匹配</li>
          </ul>
        </div>

        <div class="txtBox f1 flex">
          <div class="txtBoxIcon flex rowCenter">
            <img src="../assets/img/home_icon6.png" alt="" />
          </div>
          <h1>安全的隐私保障</h1>
          <ul>
            <li>完善的用户、秘钥、权限管理和隔离处理</li>
            <li>端云一体的安全体系，确保设备上链数据的安全可信</li>
            <li>云端SLA保障智能合约、Dapp安全稳定运行</li>
          </ul>
        </div>
      </div>


    <div class="partnerBox">
      <h1>合作伙伴</h1>
      <div class="picBox">
        <span>
          <img src="../assets/img/logo_google.png" alt="" />
        </span>
        <span>
          <img src="../assets/img/logo_ms.png" alt="" />
        </span>
        <span>
          <img src="../assets/img/logo_btc.png" alt="" />
        </span>
        <span>
          <img src="../assets/img/logo_huobi.png" alt="" />
        </span>
        <span>
          <img src="../assets/img/logo_fb.png" alt="" />
        </span>
        <span>
          <img src="../assets/img/logo_twitter.png" alt="" />
        </span>
        <span>
          <img src="../assets/img/logo_biance.png" alt="" />
        </span>
        <span>
          <img src="../assets/img/logo_tencent.png" alt="" />
        </span>

      </div>
    </div>
    </div>
  </div>
</template>
<style type="text/css" scoped>
.ani {
  animation-duration: 3s;
  animation-delay: 2s;
  /*animation-iteration-count: infinite;*/
}
  .homeTxt1{
    margin: 4rem 20%;
    font-size: 1.25rem;
    color: #666;
    text-align: center;
  }
.picBox .pt:nth-child(2) .aniIcon:before{

}
  .picBox .pt{
    margin: 0 1rem;
    /*background-color: #efefef;*/
    overflow: hidden;
  }
  .aniIcon{
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.5rem;
    width: 4rem;
  }
  .aniIcon:before{
    content: '';
    height: 4rem;
    width: 4rem;
    background-color: #45ADF6;
    display: block;
    position: absolute;
    border-radius: 3rem;
    /*transition-property: transform,border-radius;*/
    /*transition-duration: 200ms,200ms;*/
    /*transform: scale(1);*/
    transition-property: left,top,width,height,border-radius;
    transition-duration: 500ms,500ms,500ms,500ms,500ms;
  }
.picBox .pt:nth-child(2) .aniIcon:before{
  background-color: #B555C2;
}
.picBox .pt:nth-child(3) .aniIcon:before{
  background-color: #48C858;
}
  .aniIcon img{
    transition-property: transform,opacity;
    transition-duration: 500ms, 500ms;
  }
  .aniTxt{
    margin: 3rem 1.5rem 1.5rem;
    transition-property: transform;
    transition-duration: 1s;
  }
.aniTxt:before {
  content: '';
  width: 3em;
  height: 2px;
  background-color: #E6E6E6;
  position: absolute;
  top: -1rem;
  font-size: 1.25rem;
  transition-property: opacity;
  transition-duration: 500ms;
}
.aniTxt h2{
  font-size: 1.25rem;
}

.aniTxt p{
  color: #b8b8b8;
  line-height: 1.5rem;
  margin-top:.5rem;
}
  .ptHover .aniIcon:before{
    border-radius: 0;
    /*transform: scale(10);*/
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
.ptHover .aniIcon img{
  transform: scale(2) translate(-1.4rem,-1.4rem);
  opacity: .6;
}
.ptHover .aniTxt{
  transform: translateY(-10px);
}
.ptHover .aniTxt h2,
.ptHover .aniTxt p{
  color: #fff;
}
.ptHover .aniTxt:before{
  opacity: .8;
}
.aniBox2{
  margin-top: 5rem;
}
.aniBox2 .txtBox{
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  height: calc(33.333% * 0.875 + 1px);
  flex-direction: column;
  align-items: center;
  position: relative;
}
  .aniBox2 .txtBox:nth-child(1){
  background-image: url("../assets/img/home_bg1.png");
  }
.aniBox2 .txtBox:nth-child(2){
  background-image: url("../assets/img/home_bg2.png");
}
.aniBox2 .txtBox:nth-child(3){
  background-image: url("../assets/img/home_bg3.png");
}
.txtBox:before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(102, 102, 102,0.2);
  filter: drop-shadow(2px 4px 6px black);
}
.aniBox2 .txtBox h1{
  font-size: 1.25rem;
  color: #fff;
  position: relative;
}
txtBox h1:before {
  content: '';
  height: 2px;
  width: 3rem;
  background-color: #fff;
  position: absolute;
  top: -1rem;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.aniBox2 .txtBox ul{
  display:none;
}
.aniBox2 .txtBox li{
  font-size: .8rem;
  color: #fff;
}
  .aniBox2 .txtBox img{
    width: 16%;
    max-width: 68px;
    margin-bottom: 3rem;
  }
  .txtBoxIcon{
    height: 50%;
    width: 100%;
    align-items: flex-end;
  }
.partnerBox{
  text-align: center;

}
  .partnerBox h1{
    margin: 5rem 0 3rem;
    font-size: 1.5rem;
    font-weight: normal;
    color: #333;
  }
  .partnerBox .picBox{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
.partnerBox .picBox span{
  display: flex;
  width: 8rem;
  height: 2.5rem;
  margin: 0 2rem 1rem;
  align-items: center;
}
.partnerBox .picBox img{
  width: 100%;
}
</style>
<script>
import langs from "../mixins/langs";
import Banner from "../components/Banner";
import ScrollMagic from "scrollmagic";
import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";

let controller;
let calcH = function () {};
export default {
  name: "Home",
  components: {
    Banner
  },
  data() {
    return {
      test: 123
    };
  },
  created() {
    //controller = new ScrollMagic.Controller({container: "#app"});
  },
  mounted() {
    // controller = new ScrollMagic.Controller({ container: "#app" });
    // new ScrollMagic.Scene({ duration: 100 })
    //   .setPin("#aniT1")
    //   .addIndicators()
    //   .addTo(controller);
    // new ScrollMagic.Scene({
    //   triggerElement: "#aniT2-0",
    //   reverse: true,
    //   triggerHook: 0.8
    // })
    //   .setClassToggle("#aniT2", "bounce")
    //   .addIndicators()
    //   .addTo(controller);

    calcH = function(){
      const w = document.getElementsByClassName("txtBox")[0].clientWidth;
      const h = w/(480/560);
      const elem = document.getElementsByClassName("aniBox2")[0].getElementsByClassName('txtBox');
      for(let i=0; i<elem.length; i++){
        elem[i].style.height = h + 'px';
      }
    };
    window.addEventListener('resize',calcH);
    calcH();
  },
  destroyed(){
    //console.log("销毁");
    window.removeEventListener('resize',calcH);
  },
  mixins: [langs],
  computed: {},
  methods: {}
};
</script>
