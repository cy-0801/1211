# mocker

一个简单的mockServer

### 安装 

依赖 [Node.js](https://nodejs.org/en/) (>=6.x)：
```
$ sudo npm install @lianjia/mocker --registry=http://registry.npmjs.lianjia.com:7001 -g

```

### 用法 

1. 在项目根目录下执行`mocker`,会读取项目中mock文件夹作为响应

你的项目目录示例：
```text
.
├── README.md
├── mock
│   └── api
│       └── agent
│           └── agent
│               ├── add.js
│               ├── info.js
│               └── verify.js
├── node_modules
├── package.json
└── src
```
接口调用小栗子🌰 ：http://127.0.0.1:8080/api/agent/agent/add

mock文件示例：

```
// 普通mock数据 add.js
module.exports = {
    "errno": 0,
    "error": "",
    "cost": 123,
    "request_id": "2018121417452056837",
    "data": {
        "req_token": "ASDFADFJTYJREWFEWF"
    }
}
```
```
// 正则mock数据 完全支持mockjs 正则写法详见www.mockjs.com 项目中不需要再次引入mockjs
module.exports = {
    'errno': 0,
    'error': '',
    'cost': 232,
    'request_id': '2018121418073383422',
    'data|10-30': [{
        'guid': '@guid()',
        'phone|regexp': /1[3-9]\d{10}/,
        'agent_name': '@cname()',
        'agent_code|regexp': /\d{6}/,
        'agent_avatar': '@image("400x300", "#50B347", "#FFF", "mocker")',
        'city_name': '@city(true)',
        'ip': '@ip()'
    }]
}
```
2. 自定义mocker端口 例如：`mocker --port 3333`
3. 自定义模拟mocker服务器时延 例如：`mocker -d 1000`


### TODO

- 可以读取js 或者json文件
- 端口占用检测
- 与项目端口抹平
- fs.watch
- 挂了自动重启
- 处理post、get
- mock中js接收请求参数
- 指定代理地址 --proxy 127.0.0.1
- 指定mock文件类型 --type json 或者 js 

