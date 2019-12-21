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

