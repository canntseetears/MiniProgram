import axios from 'axios';
export default function request(config) {
  const instance = axios.create({
    baseURL:'https://gitee.com/colorss/json/raw/master',
    timeout:2000
  })
  instance.interceptors.request.use(config=>{
    //请求拦截,处理请求之后要返回
    return config;
  },err=>{
    //请求失败的操作
  })
  instance.interceptors.response.use(result=>{
    //响应拦截，操作后要返回
    return result.data
  },err=>{
    console.log(err);
  })
  return instance(config);
}