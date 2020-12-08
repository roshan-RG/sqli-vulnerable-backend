const QueryNew = require("../db/mysql")

const GetNews = async () => {
    let article = await QueryNew(1)
    console.log(article)

    const { Id, Title, Datetime, Body } = article

    console.log(Body)
    return {
        "id": Id,
        "title": Title,
        "datetime": Datetime,
        "text": Body
    }
}

module.exports = GetNews
