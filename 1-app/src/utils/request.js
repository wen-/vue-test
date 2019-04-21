import axios from "axios";
import router from "../router";
import store from "../store";

axios.defaults.timeout = 30000; // 超时
// axios.defaults.baseURL = ''
// axios.defaults.baseURL = 'http://47.97.209.44';

// 请求初始化配置

axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.withCredentials = false; // cookie验证

// 添加请求拦截器
axios.interceptors.request.use(
  function(config) {
    // 携带token
    if (store.state.app.userToken) {
      config.headers["Authorization"] = store.state.app.userToken;
    }
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function(response) {
    // 超时
    if (response.data.code === "000000") {
      store.commit("logout");
      router.push({ name: "login" });
    }
    return response;
  },
  function(error) {
    // 返回的报错
    if (error.response) {
      // 有返回的报错
      switch (error.response.status) {
        case 400: // 服务器报错
          error.response.data.message = "服务器报错";
          break;
        case 404: // 接口不存在
          if (typeof error.response.data !== "object") {
            error.response.data = {};
          }
          error.response.data.message = "接口不存在";
          break;
        default:
          // 服务器其他异常
          store.commit("setServiceError", true);
          if (typeof error.response.data !== "object") {
            error.response.data = {};
          }
          error.response.data.message = "服务器异常";
          break;
      }
    } else {
      // 没有返回报错
      error.response = {};
      error.response.data = {};
      // 超时或者其他异常
      error.response.data.message = "服务器异常";
    }

    return Promise.reject(error.response);
  }
);
export default axios;
