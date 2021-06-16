const fs = require('fs')
const path = require('path')
const Koa = require('koa')
const jsonfile = require('jsonfile')
const app = new Koa()
const cors = require('koa2-cors')
const chalk = require('chalk')
const Mock = require('mockjs')

const log = function (txt) {
  console.log(chalk.blue.bold(txt))
}
/**
 * @method delay
 * @param {number} time 毫秒
 * @desc 延时任意毫秒
 * @example：delay(500).then(() => console.log('after 500ms'))
 */
const delay = (time = 3000) => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () { resolve() }, time)
  })
}

module.exports = function (port, delayTime) {
  app.use(cors())
  app.use(async (ctx, next) => {
    // js
    const mockDir = path.join(process.cwd(), `mock`)
    let result
    let filePath = `${mockDir}${ctx.request.path}.js`
    if (fs.existsSync(filePath)) {
      // 取消require缓存机制
      delete require.cache[require.resolve(filePath)]
      result = Mock.mock(require(filePath))
      if (delayTime) {
        delayTime = delayTime === 'random' ? Math.random() * 100 : delayTime
        await delay(delayTime).then(() => {
          ctx.status = 200
          ctx.body = result
        })
      } else {
        ctx.status = 200
        ctx.body = result
      }
    } else {
      result = {
        'data': 'NOT FOUND'
      }
      ctx.status = 404
      // ctx.type = 'application/json'
      ctx.body = result
    }
  })

  let server = app.listen(port, '0.0.0.0')
  server.on('listening', function () {
    const delayText = delayTime ? `服务器时延${delayTime}毫秒,` : '服务器无时延,'
    log(`mockServer is working ,${delayText}请访问 http://127.0.0.1:${port}`)
  })
  server.on('error', function (err) {
    if (err.code === 'EADDRINUSE') {

    }
  })
}
