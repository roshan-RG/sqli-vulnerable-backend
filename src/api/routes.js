const express = require("express")
const GetNews = require("../services/news")
const news = require("../services/news")

const router = express.Router()

router.get("/", (req, res, next) => {
    res.send("Hola mundo...")
})

router.get("/news", async (req,res,next)=>{

    console.log(req.query.asdf)

    const article = await GetNews()

    res.status(200).send(article)
})

module.exports = router
