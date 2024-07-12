// ! module imports
const express = require('express')
const dotenv = require('dotenv').config()
const errorHandler = require('./middleWare/errorMiddleware')
const cors = require('cors');
const session = require("express-session")
const http = require("http");
const { Server } = require("socket.io");
const connectDB = require('./config/db')

const app = express()

// ! cors setup  m
app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
    })
);

// ! parsers
app.use(express.json())
app.use(express.urlencoded({ extended: false }))    

app.use(express.static('public/'))

// ! session
app.use(
    session({
        secret: process.env.SESSION_SECRET || "default_secret_key",
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 24 * 60 * 60 * 1000,
        },
    })
);

// ! create http server
const server = http.createServer(app)


connectDB();
const port = process.env.PORT || 5000
    
// ! routes
app.use('/api/', require('./routes/userRoutes'))


// ! error middleware
app.use(errorHandler)

// ! server     
server.listen(port, () => console.log (`server is running on ${port}`)) 
