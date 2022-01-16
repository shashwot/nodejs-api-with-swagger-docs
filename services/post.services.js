const db = require('../config/dbconfig')

exports.add_post = (data, callback) => {
    db.query(
        'INSERT INTO posts (description,imagePath,datetimeCreated,addedByUserId) values (?,?,?,?)',
        [data.description, data.imagePath, new Date(), data.addedByUserId],
        (error, results, fields) => {
            if (error) {
                console.log(error)
                return callback(error)
            }
            return callback(null, `Post Added Successfully`)
        }
    )
}



exports.get_all_post = (data, callback) => {
    db.query(
        `SELECT p.id AS postId, p.description, p.datetimeCreated, 
        p.likeCount, p.dislikeCount, p.addedByUserId, u.firstName, u.lastName 
        FROM posts AS p INNER JOIN users AS u ON p.addedByUserId = u.id`,
        [],
        (error, results, fields) => {
            if (error) {
                console.log(error)
                return callback(error)
            }
            return callback(null, results)
        }
    )
}


exports.add_post_comment = (data, callback) => {
    db.query(
        `INSERT INTO comments (postId,comment,datetimeCreated,addedByUserId) values (?,?,?,?)`,
        [data.postId, data.comment, new Date(), data.addedByUserId],
        (error, results, fields) => {
            if (error) {
                console.log(error)
                return callback(error)
            }
            return callback(null, "Comment Added Successfully.")
        }
    )
}


exports.get_post_all_comment = (data, callback) => {
    db.query(
        `SELECT c.id AS postId, c.comment, c.datetimeCreated, 
        c.addedByUserId, u.firstName, u.lastName
        FROM comments AS c INNER JOIN users AS u ON c.addedByUserId = u.id
        where c.postId = ?`,
        [data.postId],
        (error, results, fields) => {
            if (error) {
                console.log(error)
                return callback(error)
            }
            return callback(null, results)
        }
    )
}


exports.like_post = (data, callback) => {
    db.query(
        `UPDATE posts set likeCount= likeCount+1 where id = ?`,
        [data.postId],
        (error, results, fields) => {
            if (error) {
                console.log(error)
                return callback(error)
            }
            if (results.affectedRows === 1) {
                return callback(null, "Liked Successfully.")
            }
            else {
                return callback(new Error("Invalid post."))
            }
        }
    )
}


exports.dislike_post = (data, callback) => {
    db.query(
        `UPDATE posts set dislikeCount= dislikeCount+1 where id = ?`,
        [data.postId],
        (error, results, fields) => {
            if (error) {
                console.log(error)
                return callback(error)
            }
            if (results.affectedRows === 1) {
                return callback(null, "Disliked Successfully.")
            }
            else {
                return callback(new Error("Invalid post."))
            }
        }
    )
}


exports.delete_post = (data, callback) => {
    db.query(
        `delete from posts where id = ?`,
        [data.postId],
        (error, results, fields) => {
            if (error) {
                console.log(error)
                return callback(error)
            }
            if (results.affectedRows === 1) {
                return callback(null, "Post Deleted Successfully.")
            }
            else {
                return callback(new Error("Invalid post."))
            }
        }
    )
}