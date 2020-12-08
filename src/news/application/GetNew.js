import { News } from "../domain/News.js"

export default class GetNew {
    constructor(repository) {
        this.repository = repository
    }

    async run(id) {
        const result = await this.repository.search(id)
        const New = new News(result.Id, result.Title, result.Datetime, result.Body);
        return New
    }
}