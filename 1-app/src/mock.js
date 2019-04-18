import Mock from 'mockjs';

Mock.mock('/api/login', (req, res) =>{
  return {
    code: 200,
    message: "ok",
  }
});
