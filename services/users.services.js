const db = require('../config/dbconfig')

exports.register = (data, callback) => {
    db.query(
        'INSERT INTO users (firstName, lastName, emailId, password) values (?,?,?,?)',
        [data.firstName, data.lastName, data.emailId, data.password],
        (error, results, fields) => {
            if (error) {
                console.log(error)
                return callback(error)
            }
            return callback(null, `Registration Successful`)
        }
    )
}

exports.login = (data, callback) => {
    db.query(
        'select * from users where emailId=? and password=? order by id asc',
        [data.emailId, data.password],
        (error, results, fields) => {
            if (error) {
                console.log(error)
                return callback(error)
            }
            if (results.length > 0) {
                return callback(null, 'Login Success')
            }
            else {
                return callback(null,'Invalid Credentials')
            }
        }
    )
}