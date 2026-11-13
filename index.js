//import json server
const jsonServer=require('json-server')

//create server for running josn file
const server = jsonServer.create()
// set up route/path for json file
const router = jsonServer.router('db.json')
//use middleware , router
const middleware = jsonServer.defaults()
server.use(middleware)
server.use(router)
//create server podt number
const PORT = 3000
server.listen(PORT,()=>{
    console.log("server started");
    
})