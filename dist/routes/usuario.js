"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_model_1 = require("./../model/usuario.model");
const express_1 = require("express");
const userRoutes = express_1.Router();
userRoutes.get('/prueba', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'Todo funciona correctamente'
    });
});
//ruta para crear un usuario
userRoutes.post('/create', (req, res) => {
    const user = {
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password,
        avatar: req.body.avatar
    };
    usuario_model_1.Usuario.create(user).then(userDB => {
        res.json({
            ok: true,
            user: userDB
        });
    }).catch(err => {
        res.json({
            ok: false,
            err
        });
    });
});
exports.default = userRoutes;
