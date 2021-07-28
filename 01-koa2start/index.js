const Koa = require('koa')
const app = new Koa()

app.use( async (ctx) => {
  let url = ctx.request.url
  ctx.body = 'hello koa2' + url
})

app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')