const Koa = require('koa')
const app = new Koa()

app.use( async (ctx) => {
  if (ctx.url === '/' && ctx.method === 'GET') {
    let html = `
      <h3>koa2 request post demo</h3>
      <form method="POST" action="/">
        <p>userName</p>
        <input name="userName" /><br/>
        <p>nickName</p>
        <input name="nickName" /><br/>
        <p>email</p>
        <input name="email" /><br/>
        <button type="submit">submit</button>
      </form>
    `

    ctx.body = html 
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    let postData = await parsePostData( ctx )
    ctx.body = postData
  } else {
    ctx.body = '<h3>404!!!</h3>'
  }
})

// 解析上下文里node原生请求的POST参数
function parsePostData( ctx ) {
  return new Promise((resolve, reject) => {
    try {
      let postData = "";
      console.log(ctx.req)
      ctx.req.addListener('data', (data) => {
        postData += data
      })
      ctx.req.addListener("end", () => {
        let parseData = parseQueryStr( postData )
        resolve(parseData)
      })
    } catch (err) {
      reject(err)
    }
  })
}

function parseQueryStr( queryStr ) {
  let queryData = {}
  let queryStrList = queryStr.split('&')
  console.log( queryStrList )
  for ( let [index, queryStr] of queryStrList.entries() ) {
    let itemList = queryStr.split('=')
    queryData[ itemList[0] ] = decodeURIComponent(itemList[1])
  }
  return queryData
}

app.listen(3000, () => {
  console.log('[demo] request post is starting at port 3000')
})