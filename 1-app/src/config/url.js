/**
 * 所有的url定义在这里
 */

const hosts = {
  dev: 'http://***', // 默认开发
  test: 'http://***', // 212test
  uat: 'http://***', // 44uat
  production: 'https://***', // 生产
};

const host = hosts.uat;

export default {
  host,
  // 登录
  login: `${host}/app/login/loginmember`,
  loginResetPassword: `${host}/app/login/resetpassword`,
  loginSend: `${host}/app/login/sendcode`,
  loginVerify: `${host}/app/login/verify`,
  logoutMember: `${host}/app/login/logoutmember`,

  // 获取oss访问key
  getOssKey: `${host}/app/oss/key/get`,

};
