const fs = require('fs')
const getSqlMap = require('./get-sql-map')

let sqlContentMap = {}

/**
 * @description  读取sql文件内容 
 * @param  {string} fileName 文件名称
 * @param  {string} path 文件所在的路径
 * @return {string} 脚本文件内容 
 */
function getSqlContent( fileName, path ) {
  let content = fs.readFileSync( path, 'binary')
  sqlContentMap[ fileName ] = content
}

