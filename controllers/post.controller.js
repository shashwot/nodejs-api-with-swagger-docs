const postService = require('../services/post.services')

exports.add_post = (request, response, next) => {
    const data = {
        description: request.body.description,
        imagePath: request.body.imagePath,
        addedByUserId: request.body.addedByUserId,
    }
    postService.add_post(data,
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


exports.get_all_post = (request, response, next) => {
    const data = {}
    postService.get_all_post(data,
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


exports.add_post_comment = (request, response, next) => {
    const data = {
        postId: request.body.postId,
        comment: request.body.comment,
        addedByUserId: request.body.addedByUserId,
    }
    postService.add_post_comment(data,
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


exports.get_post_all_comment = (request, response, next) => {
    const data = {
        postId: request.query.postId,
    }
    postService.get_post_all_comment(data,
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



exports.like_post = (request, response, next) => {
    const data = {
        postId: request.body.postId,
    }
    postService.like_post(data,
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


exports.dislike_post = (request, response, next) => {
    const data = {
        postId: request.body.postId,
    }
    postService.dislike_post(data,
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


exports.delete_post = (request, response, next) => {
    const data = {
        postId: request.query.postId,
    }
    postService.delete_post(data,
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
