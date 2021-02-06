"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const server_1 = __importDefault(require("./clases/server"));
const usuario_1 = __importDefault(require("./routes/usuario"));
const server = new server_1.default();
//bodyParser utilizado para crear o actualizar un dato en la base de datos
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//rutas de la aplicacion
server.app.use('/user', usuario_1.default);
//conexion a la base de datos
mongoose_1.default.connect('mongodb://localhost:27017/backend', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, (err) => {
    if (err)
        throw err;
    console.log('base de datos online');
});
//levantar servidor de express
server.start(() => {
    console.log(`servidor corriendo en puerto ${server.port}`);
});
