import axios from "axios";

export function request(config) {
  //1.创建axios实例
  return new Promise(((resolve, reject) => {
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000,
    })

    //2.axios拦截器
    instance.interceptors.request.use(config =>{
      // console.log(config);

      return config
    },error => {
      console.log(error);
    })
    //2.2响应拦截
    instance.interceptors.response.use(res => {
      // console.log(res);
      return res.data
    },err =>{
      console.log(err);
    })

    //3发送真正的网络请求
    instance(config)
      .then(res =>{
        resolve(res)
      }).catch(err => {
        reject(err)
    })
    // return instance(config)

  }))

}

