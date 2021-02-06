import { Schema , Document, model } from "mongoose";

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'Necesitas ingresar tu nombre']
    },
    avatar:{
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

interface IUsuario extends Document{
    nombre: string;
    avatar: string;
    email : string;
    password: string;
}

export const Usuario = model<IUsuario>('Usuario', usuarioSchema);