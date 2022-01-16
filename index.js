const express = require('express')
const bodyParser = require('body-parser')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const port = 3000
const app = express()


const usersRoutes = require('./routes/users.route')
const postRoutes = require('./routes/post.route')

app.use(bodyParser.json())

const swaggerOption = {
    swaggerDefinition: (swaggerJsdoc.Options = {
        info: {
            title: "SWAGGER DOCS",
            description: "API DOC",
            contact: {
                name: "Shashwot",
            },
            servers: ["https://localhost:3000/"]
        },
    }),
    apis: ["index.js", "./routes/*.js"]
}
const swaggerDocs = swaggerJsdoc(swaggerOption)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use('/users', usersRoutes)
app.use('/posts', postRoutes)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})