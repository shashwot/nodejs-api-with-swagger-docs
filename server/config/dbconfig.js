const { createPool } = require('mysql')

const pool = createPool({
    user: process.env.DB_MYSQL_USER,
    host: process.env.DB_MYSQL_HOST,
    database: process.env.DB_MYSQL_DATABASE,
    password: process.env.DB_MYSQL_PASSWORD,
    port: process.env.DB_MYSQL_PORT || 3306,
    connectionLimit: process.env.DB_MYSQL_CONNECTION_LIMIT || 10,
    debug: false
})

module.exports = pool