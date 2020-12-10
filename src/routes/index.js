import { Router } from "express"
import NewsController from "../controllers/NewsGetController.js"

export function registerRoutes(router, newsController, loginController) {
    router.get("/news", async (req, res) =>  newsController.run(req, res))

    router.post("/login", async (req, res) => loginController.run(req, res))
}

export default registerRoutes
