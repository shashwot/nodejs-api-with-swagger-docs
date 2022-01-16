const { createPool } = require('mysql')

const pool = createPool({
    user: 'api_user',
    host: 'localhost',
    database: 'api',
    password: 'api_user',
    port: '3306',
    connectionLimit: 10,
    debug: false
})
  

module.exports = pool