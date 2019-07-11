<template>
  <el-container>
    <el-main>
      <router-view />
    </el-main>
    <el-footer>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#fff"
        text-color="#989CA3"
        active-text-color="#332F29"
      >
        <el-menu-item index="1">
          <div slot="title">首页</div>
          <i class="icon el-icon-menu"></i>
        </el-menu-item>
        <el-menu-item index="2">
          <div slot="title">发现</div>
          <i class="icon el-icon-news"></i>
        </el-menu-item>
        <el-menu-item index="3">
          <div slot="title">服务</div>
          <i class="icon el-icon-service"></i>
        </el-menu-item>
        <el-menu-item index="4">
          <div slot="title">我的</div>
          <i class="icon el-icon-goods"></i>
        </el-menu-item>
      </el-menu>
    </el-footer>
  </el-container>

</template>

<style scoped>
.el-header{

}
.el-footer {
  border-top: solid 1px #f2f4f7;
  background-color: #fff;
  color: #333;
  text-align: center;
  padding: 0;
}
.el-menu-demo{
  display: flex;
}
.el-menu-item{
  flex: 1;
  line-height: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
}
.el-menu-item.is-active{
  border: none;
}
.el-menu-item .icon{
  margin: 0;
  font-size: 24px;
}
.el-main {
  background-color: #fff;
  color: #333;
}
</style>

<script>
const routerMap = {
  "homeIndex": "1",
  "homeDiscover": "2",
  "homeServices": "3",
  "homeUser": "4",
};
export default {
  data() {
    return {
      // activeIndex: '1',
      // routerHome: {name: "HomeIndex"},
      // routerDiscover: {name: "HomeDiscover"},
      // routerServices: {name: "HomeServices"},
      // routerUser: {name: "HomeUser"},
    };
  },
  computed: {
    activeIndex(){
      console.log(this.$router.currentRoute);
      return routerMap[this.$router.currentRoute.name]||1;
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      switch (key) {
        case "1":
          this.$router.push({name: "homeIndex"});
          break;
        case "2":
          this.$router.push({name: "homeDiscover"});
          break;
        case "3":
          this.$router.push({name: "homeServices"});
          break;
        case "4":
          this.$router.push({name: "homeUser"});
          break;
        default:
          this.$router.push({name: "homeIndex"});
      }
    }
  }
};
</script>
