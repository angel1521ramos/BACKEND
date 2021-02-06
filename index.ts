import Server from "./clases/server";
import userRoutes from "./routes/usuario";

const server =  new Server();

//rutas de la aplicacion
server.app.use('/user', userRoutes);

//levantar servidor de express
server.start(()=>{
console.log(`servidor corriendo en puerto ${ server.port }`);
})