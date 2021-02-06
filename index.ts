import Server from "./clases/server";

const server =  new Server();
server.start(()=>{
console.log(`servidor corriendo en puerto ${ server.port }`);
})