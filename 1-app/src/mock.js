import Mock from 'mockjs';

Mock.setup({
  timeout: 2000
});

Mock.mock('/api/login', (req) =>{
  return {
    code: 200,
    message: "ok",
    data: {
      "authorization": "eyJhbGciOiJIUzUxMiJ9.eyJ0b2tlbiI6IlFZVEhRc3RoMTZpRVZQVkdHa0tEenNrL0N3TExRZ2toIiwic3ViIjoiMTU1Nzg5NjU5OTQiLCJleHAiOjE1NTU5NjU2MDJ9.pYcmAPcw6EqSPm7guFUURWwDqiZs8zeexKSU74jrMpvw__t2sWLls2p6z-D2w-iWEYynlTMMjAbwQ8RO3vHISA",
    }
  }
});
