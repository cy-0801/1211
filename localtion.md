## localtion

```js
'https://developer.mozilla.org/en-US/search?q=URL#search-results-close-container'

// 返回完整的url
localtion.href = 'https://developer.mozilla.org/en-US/search?q=URL#search-results-close-container' 

//协议:
localtion.protocal = 'https:'

//返回主机名和当前url的端口号
localtion.host = 'developer.mozilla.org'

//返回当前url的主机名
localtion.hostname = 'developer.mozilla.org'

//端口号
localtion.port = ''

//返回当前url的路径部分
localtion.pathname = '/en-US/search'

//返回当前url的从?后开始的url内容
localtion.search = 'q=URL'

//返回从#号开始的url锚
localtion.hash = 'search-results-close-container'

//localtion的方法
localtion.assign() 加载新的文档
localtion.reload() 重新加载当前文档 有一个参数Boolean  true的话 从服务器拉取数据,false的话 从缓存拉取
localtion.replace() 用新的文档替换当前文档
localtion.toString()
```



