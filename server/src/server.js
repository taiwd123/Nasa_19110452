const app = require('./app')
const PORT = process.env.PORT || 8000;

const http = require('http')
const server = http.createServer(app)

const {loadPlanetsData} = require('./models/planets.model')
const startServer = async () => {
    await loadPlanetsData()

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    })
    
    console.log(PORT);
}

startServer()