import MySQLRespository from "../news/infraestructure/MySQLRespository.js"
import GetNew from "../news/application/GetNew.js"
export default class NewsController {
    constructor() {
        const dbConfig = {
            host: "localhost",
            user: "root",
            password: "root",
            database: "sqli",
        }
        const repository = new MySQLRespository(dbConfig)
        this.NewsSearcher = new GetNew(repository)

    }
    // constructor()
    async run(req, res) {

        try {
            const article = await this.NewsSearcher.run(1)
            res.status(200).send(article.json())
        } catch(err) {
            res.status(404).send({"id": "error", "datetime": "error", "text": "Not found"})
        }

    }
}