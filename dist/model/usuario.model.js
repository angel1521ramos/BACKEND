"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const usuarioSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, 'Necesitas ingresar tu nombre']
    },
    avatar: {
        type: String,
        default: 'av-1.png'
    },
    email: {
        type: String,
        required: [true, 'Necesitas ingresar tu email']
    },
    password: {
        type: String,
        required: [true, 'Necesita ingresar tu cuntraseña']
    }
});
exports.Usuario = mongoose_1.model('Usuario', usuarioSchema);
