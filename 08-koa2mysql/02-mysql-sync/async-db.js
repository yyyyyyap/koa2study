const mysql = require('mysql')
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '@Yun2032763',
  database: 'my_database'
})

let query = function( sql, values ) {
  return new Promise(( resolve, reject ) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        reject( err )
      } else {
        connection.query(sql, values, ( err, rows ) => {
          if( err ) {
            reject( err )
          } else {
            resolve( rows ) 
          }
          connection.destroy()
        })
      }
    })
  })
}

module.exports = { query }