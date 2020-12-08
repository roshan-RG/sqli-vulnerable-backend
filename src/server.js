const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const routes = require("./api/routes")


const server = express()
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))
server.use(cors())

server.use("/", routes)

// server.get("/", (req, res, next) => {
//     res.send("Hola mundo")
// })

module.exports = server
