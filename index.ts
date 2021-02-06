import bodyParser from "body-parser";
import Mongoose from "mongoose";
import Server from "./clases/server";
import userRoutes from "./routes/usuario";

const server =  new Server();

//bodyParser utilizado para crear o actualizar un dato en la base de datos
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

//rutas de la aplicacion
server.app.use('/user', userRoutes);

//conexion a la base de datos
Mongoose.connect('mongodb://localhost:27017/backend',
{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex:true}, (err)=>{
    if(err) throw err;
    console.log('base de datos online');
}
);


//levantar servidor de express
server.start(()=>{
console.log(`servidor corriendo en puerto ${ server.port }`);
})