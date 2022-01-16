const userService = require('../services/users.services')

exports.register = (request, response, next) => {
    const data = {
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        emailId: request.body.emailId,
        password: request.body.password,
    }
    userService.register(data,
        (error, results) => {
            if (error) {
                console.log(error)
                return response.status(400).send({ success: 0, data: "Bad Request" })
            }
            return response.status(201).send({
                success: 1,
                data: results,
            })
        })
}

exports.login = (request, response, next) => {
    const data = {
        emailId: request.body.emailId,
        password: request.body.password,
    }
    userService.login(data,
        (error, results) => {
            if (error) {
                console.log(error)
                return response.status(400).send({ success: 0, data: "Bad Request" })
            }
            return response.status(201).send({
                success: 1,
                data: results,
            })
        })
}