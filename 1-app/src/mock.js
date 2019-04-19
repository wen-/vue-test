import Mock from 'mockjs';

Mock.mock('/api/login', (req) =>{
  return {
    code: 200,
    message: "ok",
  }
});
