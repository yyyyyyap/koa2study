const mysql = require('mysql')

/**
 * 使用数据库会话访问
 */
// const connection = mysql.createConnection({
//   host: '127.0.0.1', // 数据库地址
//   user: 'root', // 数据库用户
//   password: '@Yun2032763', // 数据库密码
//   database: 'my_database' // 选中数据库
// })

// // 执行sql脚本对数据库进行读写
// connection.query('SELECT * FROM my_table', (error, results, fields) => {
//   if (error) throw error;

//   // connected!
//   console.log(results)
//   console.log(fields)
//   // 结束会话
//   connection.destroy();
// });

/**
 * 创建数据连接池访问
 */
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '@Yun2032763',
  database: 'my_database'
})

// 在数据池中进行会话操作
pool.getConnection(function(err, connection) {
  connection.query('SELECT * FROM my_table', (error, results, fields) => {
    console.log(results)
    console.log(fields)

    // 结束会话
    connection.destroy()

    if (error) throw error;
  })
})