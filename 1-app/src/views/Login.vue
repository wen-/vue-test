<template>
  <el-row type="flex" class="row-bg login-page" justify="center">
    <div class="login-box">
      <el-row type="flex" class="" justify="center"
        ><i class="el-icon-menu login-img"></i
      ></el-row>
      <el-row type="flex" class="login-body" justify="center">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="帐号">
            <el-input placeholder="请输入帐号" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input
              placeholder="请输入密码"
              v-model="form.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" round :loading="sending" @click="onSubmit"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-row>
    </div>
  </el-row>
</template>

<style>
.login-page{
  flex: 1;
}
.login-img {
  font-size: 100px;
  color: #409eff;
  margin: 100px 0 50px 92px;
}
.toast{
  top: 50%;
  min-width: 250px;
}
</style>

<script>
import { encrypt } from "../utils/crypto";
import storage from "../utils/storage";

export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
      sending: false,
    };
  },
  computed: {
    testData () {
      return this.$store.state.test
    }
  },
  methods: {
    onSubmit() {
      console.log(this.form.name);
      const { name, password } = this.form;
      if(!name || !password){
        return this.$message({
          message: "请输入用户名或密码",
          type: 'error',
          customClass: "toast",
        });
      }
      this.sending = true;
      const params = {
        name,
        password: encrypt(password)
      };

      this.axios.post('/login', params).then((res)=>{
        console.log(res);
        this.sending = false;
        const {code, data, message} = res.data;
        if(code == 200 && data){
          storage.set("authToken", 'Bearer '+data.authorization);
          this.$router.push({name: "homeIndex"});
        }else{
          this.$message.error(message);
        }
      });
    }
  }
};
</script>
