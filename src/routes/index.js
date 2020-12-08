import { Router } from "express"
import NewsController from "../controllers/NewsGetController.js"

export function registerRoutes(router, newsController) {
    router.get("/news", async (req, res) =>  newsController.run(req, res))
}

export default registerRoutes
