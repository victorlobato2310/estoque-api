import { NextFunction, Request, Response } from "express";
import bcryptjs from 'bcryptjs';
import mongoose from "mongoose";
import Usuario from '../models/Usuario';
import signJWT from "../jwt/signJWT";

const validarToken = (req: Request, res: Response, next: NextFunction) => {
  
    return res.status(200).json({
       message: "Autorizado"
   });
};

const registrar = (req: Request, res: Response, next: NextFunction) => {
   let { usuario, senha } = req.body;

   bcryptjs.hash(senha, 10, (hashError, hash) => { 
        if(hashError){
            return res.status(500).json({
                message: hashError.message,
                error: hashError
            });
        }

        // TO DO: INSERIR USUARIO NO BD

        const _usuario = new Usuario({
            _id: new mongoose.Types.ObjectId(),
            usuario,
            senha: hash
        });

        return _usuario.save()
        .then( usuario => {
            return res.status(201).json({
                usuario
            });
        }).catch(error => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
   });

};

const fazerLogin = (req: Request, res: Response, next: NextFunction) => {
   
    const { usuario, senha } = req.body;
    //usuario = "kelly";
    //senha = "kelly123";
    //console.log({ usuario, senha});
    Usuario.find({ usuario })
        .exec()
        .then((usuarios) => {
            if (usuarios.length !== 1) {
               
                return res.status(401).json({
                    message: 'Não autorizado'
                })
            }

            bcryptjs.compare(senha, usuarios[0].senha, (error, result) => {
                if (error) {
                    return res.status(401).json({
                        message: 'Não autorizado'
                    });
                } else if (result) {
                    signJWT(usuarios[0], (_error, token) => {
                        if (_error) {
                            return res.status(500).json({
                                message: _error.message,
                                error: _error
                            });
                        } else if (token) {
                            return res.status(200).json({
                                message: 'Autorizado com sucesso',
                                token: token,
                                usuario: usuarios[0]
                            });
                        }
                    });
                }
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

const obterTodosUsuarios = (req: Request, res: Response, next: NextFunction) => {
    Usuario.find()
        .select('-senha')
        .exec()
        .then((usuarios) => {
            return res.status(200).json({
                usuarios: usuarios,
                quantidade: usuarios.length
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};


export default { validarToken, registrar, fazerLogin, obterTodosUsuarios };