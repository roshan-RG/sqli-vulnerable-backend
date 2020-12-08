export class News {
    constructor(id, title, datetime, text) {
        this.id = id
        this.title = title
        this.datetime = datetime
        this.text = text
    }

    static create(id, title, datetime, text) {
        return new News(id, title, datetime, text)
    }

    json() {
        return {
            "id": this.id,
            "title": this.title,
            "datetime": this.datetime,
            "text": this.text
        }
    }
}