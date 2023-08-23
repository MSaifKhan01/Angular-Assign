const jsonServer=require("json-server")


var cors = require('cors')
require('dotenv').config();

const server=jsonServer.create();
const router=jsonServer.router("db.json")
const middleware=jsonServer.defaults();
const port =process.env.PORT||3001

server.use(cors())
server.use(middleware);
server.use(router)
server.listen(port,()=>{
    console.log("connect")
})