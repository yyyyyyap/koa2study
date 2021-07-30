const Koa = require('koa')
const session = require('koa-session-minimal')
const MysqlSession = require('koa-mysql-session')

const app = new Koa()

// 配置储存到session信息的mysql
let store = new MysqlSession({
  user: 'root',
  password: '@Yun2032763',
  database: 'koa_demo',
  // 这里要用localhost
  host: '127.0.0.1'
})

let cookie = {
  maxAge: '',
  expires: '',
  path: '',
  domain: '',
  httpOnly: '',
  overwrite: '',
  secure: '',
  sameSite: '',
  signed: ''
}
 
// 使用session中间件
app.use(session({
  key: 'SESSION_ID',
  store: store,
  cookie: cookie
}))

app.use( async (ctx) => {
  // 设置session
  if( ctx.url === '/set' ) {
    ctx.session = {
      user_id: Math.random().toString(36).substr(2),
      count: 0
    }
    ctx.body = ctx.session
  } else if ( ctx.url === '/' ) {
    // 读取session信息
    ctx.session.count = ctx.session.count + 1
    ctx.body = ctx.session
  }
})

app.listen(3000)
console.log('[demo] session is starting at port 3000')