const mysql = require('mysql')
const connection = mysql.createConnection({
  host: '127.0.0.1', // 数据库地址
  user: 'root', // 数据库用户
  password: '@Yun2032763', // 数据库密码
  database: 'my_database' // 选中数据库
})

// 执行sql脚本对数据库进行读写
connection.query('SELECT * FROM my_table', (error, results, fields) => {
  if (error) throw error;

  // connected!
  console.log(results)
  console.log(fields)
  // 结束会话
  connection.destroy();
});