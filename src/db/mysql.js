const mysql = require("mysql2/promise")

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "sqli",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})


async function getNew(id) {
    const result = await connection.query(`select * from news where Id='${id}';`);
    if( result[0].length < 1 ) {
        throw new Error("New with id was not found")
    }

    return result[0][0]
}

module.exports = getNew
