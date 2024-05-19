import axios from "axios";
const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 10 * 1000
});

http.interceptors.request.use(
  config => {
    console.log(1234);
    // throw new Error('请求拦截报错')
    return config;
  },
  err => {
    console.log(err);
    // 请求拦截器我测试不管是接口写错 参数乱传 都不会走这个报错回调
    console.log("请求拦截报错");
    return Promise.reject(err);
  }
);

http.interceptors.response.use(
  res => {
    if (res.status === 200) {
      // 有的接口别管参数对不对 status都是200 需要在返回数据里再次判断
      return res.data;
    }
  },
  err => {
    // 报错 拦截器中错误处理函数需要Promise.reject(err) 抛出一个错误的promise 否则 如果return 正常的数据类型 则请求结果不会catch到错误 反而会走 then
    console.log(err);
    // throw new Error 也可以但是看不到 错误内容
    return Promise.reject(err);
  }
);

export default http;
