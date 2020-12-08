import bodyParser from "body-parser"
import express, {Router} from "express"
import cors from "cors"
import registerRoutes from "./routes/index.js"
import NewsController from "./controllers/NewsGetController.js"


const app = express()

app.set("port", process.env.PORT || 8080)

// const express = require("express")
// const bodyParser = require("body-parser")
// const cors = require("cors")
// const routes = require("./api/routes")


// const server = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

const router = Router()

app.use(router)

const newsController = new NewsController()

registerRoutes(router, newsController)

export default app

// server.use("/", routes)

// // server.get("/", (req, res, next) => {
// //     res.send("Hola mundo")
// // })

// module.exports = server
