const postController = require("../controllers/post.controller");

var express = require("express")

var router = express.Router();

router.post("/add-post", postController.add_post)
/**
 * @swagger
 * /posts/add-post:
 *   post:
 *      description: Used to add post
 *      tags:
 *          - posts
 *      parameters:
 *          - in: body
 *            name: User
 *            description: User data
 *            schema:
 *              type: object
 *              required:
 *                 - description
 *                 - imagePath
 *                 - addedByUserId
 *              properties:
 *                  description:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 1000
 *                      example: This is a description of the post
 *                  imagePath:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 1000
 *                      example: abc.jpg
 *                  addedByUserId:
 *                      type: integer
 *                      example: 11
 *      responses:
 *          '200':
 *              description: Post added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */



router.get("/get-all-post", postController.get_all_post)
/**
 * @swagger
 * /posts/get-all-post:
 *   get:
 *      description: Used to add post
 *      tags:
 *          - posts
 *      responses:
 *          '200':
 *              description: Post added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


router.post("/add-post-comment", postController.add_post_comment)
/**
 * @swagger
 * /posts/add-post-comment:
 *   post:
 *      description: Used to add post
 *      tags:
 *          - posts
 *      parameters:
 *          - in: body
 *            name: User
 *            description: User data
 *            schema:
 *              type: object
 *              required:
 *                 - postId
 *                 - comment
 *                 - addedByUserId
 *              properties:
 *                  postId:
 *                      type: integer
 *                      example: 1
 *                  comment:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 1000
 *                      example: This is a comment
 *                  addedByUserId:
 *                      type: integer
 *                      example: 11
 *      responses:
 *          '200':
 *              description: Post added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


router.get("/get-post-all-comment", postController.get_post_all_comment)
/**
 * @swagger
 * /posts/get-post-all-comment:
 *   get:
 *      description: Used to get all comment in a post
 *      tags:
 *          - posts
 *      parameters:
 *          - in: query
 *            name: postId
 *            description: PostID
 *            schema:
 *              type: object
 *              required:
 *                 - postId
 *              properties:
 *                  postId:
 *                      type: integer
 *                      example: 1
 *      responses:
 *          '200':
 *              description: Fetched successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */




router.put("/like-post", postController.like_post)
/**
 * @swagger
 * /posts/like-post:
 *   put:
 *      description: Used to like post
 *      tags:
 *          - posts
 *      parameters:
 *          - in: body
 *            name: Like Post
 *            description: Like post
 *            schema:
 *              type: object
 *              required:
 *                 - postId
 *              properties:
 *                  postId:
 *                      type: integer
 *                      example: 1
 *      responses:
 *          '200':
 *              description: Liked successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


router.put("/dislike-post", postController.dislike_post)
/**
 * @swagger
 * /posts/dislike-post:
 *   put:
 *      description: Used to dislike post
 *      tags:
 *          - posts
 *      parameters:
 *          - in: body
 *            name: Dislike Post
 *            description: dislike post
 *            schema:
 *              type: object
 *              required:
 *                 - postId
 *              properties:
 *                  postId:
 *                      type: integer
 *                      example: 1
 *      responses:
 *          '200':
 *              description: DisLiked successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


router.delete("/delete-post", postController.delete_post)
/**
 * @swagger
 * /posts/delete-post:
 *   delete:
 *      description: Used to delete post
 *      tags:
 *          - posts
 *      parameters:
 *          - in: query
 *            name: postId
 *            description: delete post
 *            schema:
 *              type: object
 *              required:
 *                 - postId
 *              properties:
 *                  postId:
 *                      type: integer
 *                      example: 1
 *      responses:
 *          '200':
 *              description: Deleted successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

module.exports = router;