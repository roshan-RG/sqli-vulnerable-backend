import app from "./app.js"

const server = app.listen(app.get('port'), () => {
    console.info(`Server running on port ${app.get('port')}`)
})

export default server
