```js

import axios from 'axios'
import qs from 'qs'
import loading from 'loading/index.js'

const http = axios.create({
	//baseURL:'',
	timeout:5000,
	withCredentials:true,
    //headers:
})

http.interceptors.request.use((config)=>{
	if(config.methods.toUpperCase() === 'GET'){
		config.params = {
			...config.data
		}
	}else if(config.methods.toUpperCase() === 'POST'){
		config.headers['content-type'] = 'application/x-www-form-urlencoded'
		//config.data = qs.stringify(config.data)
	}
	loading.open()
	return config
},err=>{
	return Promise.reject(err)
})

http.interceptors.response.use(res=>{
	if(res.status === 200 ){
		loading.close()
		return res.data
	}
})

export default http
```

```js
http({
    url:'',//必须
    method:'get',// 不写默认get
    params: {
    	ID: 12345
  	},
})
```

```js
//响应体包含的信息
{
    status:200,//code
    statusText:'ok',
    headers:{},//响应头
    config:{},
    request:{},
    data:{}
}
```

```js
export default function request (opt) {
  // 调用 axios api，统一拦截
  let gbCode = '110000'
  window.location.href.replace(/gb[C,c]ode=([^?&#/=]+)/g, (a, b) => {
    gbCode = b
  })
  if (['POST', 'PUT', 'PATCH'].includes(opt.method.toUpperCase())) {
    // 如果data是对象 则添加gbcode
    if (!Array.isArray(opt.data)) {
      opt.data = { ...opt.data, gbCode }
    }
  } else {
    if (!Array.isArray(opt.params)) {
      opt.params = { ...opt.params, gbCode }
    }
  }
  return axios(opt)
    .then((response) => {
      if (response.data instanceof Object) {
        if (!response.data.data) {
          let error = { msg: '系统异常，请重试' }
          throw (error)
        }
        let res = response.data.data || {}
        if (res instanceof Object) {
          if (res.code === 2000 || res.code === 7000) {
            // 请求成功
            return Promise.resolve(res)
          } else {
            // const { dispatch } = store
            if (res.code === 4001) {
              window.location.href = '/login'
            } else if (res.code === 4003) {
              return Promise.reject(res)
              // dispatch(routerRedux.push('/exception/403'))
            } else {
              // message.error(res.message)
              return Promise.reject(res)
            }
          }
        } else {
          // 后端接口请求成功,但返回不是对象 ,例如文件流
          return Promise.resolve(res)
        }
      } else {
        // node层请求不到后端
        if (response.data.indexOf('login.ke.com') > -1) {
          window.location.reload()
        }
        let error = { msg: '系统异常，请重试' }
        throw (error)
      }
    })
    .catch((error) => {
      // 请求配置发生的错误
      message.error(error.msg || error.message || '系统异常，请重试')
      return Promise.reject(error)
    })
}
```

