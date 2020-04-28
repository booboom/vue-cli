// json-server 配置文件
const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
const myHost = require('./ipConfig')
const apiList = require('./api-faker-data')

const mockPort = 28000
process.env.NODE_ENV = 'local'

server.use(middlewares)

server.use((req, res, next) => {
    req.method = 'GET'
    next()
})

const apiArr = Object.keys(apiList)
apiArr.forEach(item => {
    server.get(`/${item}`, (req, res) => {
        res.jsonp(apiList[item])
    })
})

server.use(router)
server.listen(mockPort, () => {
    console.log(`
    JSON server is running!
    apiPath: http://${myHost}:${mockPort}
    `)
})