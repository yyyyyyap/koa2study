const Koa = require('koa')
const app = new Koa()

app.use( async (ctx) => {
  let url = ctx.url

  // 有两种方式，一种是从上下文中的request对象中获取，另一种是从上下文中直接获取
  // 从上下文的request对象中获取
  let request = ctx.request
  let req_queryobj = request.query
  let req_querystr = request.querystring

  // 从上下文直接获取
  let ctx_queryobj = ctx.query
  let ctx_querystr = ctx.querystring

  ctx.body = {
    url,
    req_queryobj,
    req_querystr,
    ctx_queryobj,
    ctx_querystr
  }
})

app.listen(3000, () => {
  console.log('[demo] request get is starting at port 3000')
})