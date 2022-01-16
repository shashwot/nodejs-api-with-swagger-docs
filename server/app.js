"use strict";
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const dotenv = require("dotenv");
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');


/* fetch env from different location */
require('dotenv').config({ path: path.join(__dirname, 'conf/.env') });

/* use express */
const app = express();

/* body parser to json */
app.use(bodyParser.json())

/* morgan logger */
app.use(logger('dev'));


/* allow cors for all */
app.use(cors());
app.options('*', cors());

/* Added home */
app.get('/', (req, res, next) => {
    res.status(200);
    res.send('Hello World !');
});

/* swagger documentation start */
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
    apis: ["./server/index.js", "./server/routes/*.js"]
}
const swaggerDocs = swaggerJsdoc(swaggerOption)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
/* swagger documentation end */


/* health check of application */
app.get('/health-check', (req, res, next) => {
    res.status(200);
    res.send({ status: 1 });
});


/* route to application */
const usersRoutes = require('./routes/users.route')
const postRoutes = require('./routes/post.route')

app.use('/users', usersRoutes)
app.use('/posts', postRoutes)


module.exports = app;