const server = require("./server")

const PORT = process.env.PORT || 8080

server.listen(PORT);

console.info(`Listening on PORT ${PORT}`)
