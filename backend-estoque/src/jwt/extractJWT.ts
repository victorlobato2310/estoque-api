import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { CONFIG_JWT } from '../database/config';

const extractJWT = (req: Request, res: Response, next: NextFunction) => {
    
    let token = req.headers.authorization?.split(' ')[1]; // dividindo o array pelo espaço pois o token = Bearer  token

    if(token){
        jwt.verify(token, CONFIG_JWT.secret, (error, decoded) => {
            if(error){
                return res.status(404).json({
                    message: error.message,
                    error
                });
            }
            else{
                res.locals.jwt = decoded;
                next();
            }
        });   
    }
    else{
        return res.status(401).json({
            message: "Não autorizado"
        });
    }

}

export default extractJWT;