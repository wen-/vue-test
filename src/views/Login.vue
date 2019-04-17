<template>
  <el-row type="flex" class="row-bg login-page" justify="center">
    <div class="login-box">
      <el-row type="flex" class="" justify="center"><i class="el-icon-menu login-img"></i></el-row>
      <el-row type="flex" class="login-body" justify="center">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="帐号">
            <el-input placeholder="请输入帐号" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input placeholder="请输入密码" v-model="form.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" :loading="false" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </div>
  </el-row>
</template>

<style scoped>
.login-img{
  font-size: 100px;
  color: #409EFF;
  margin: 100px 0 50px 92px;
}
</style>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        password: '',
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>