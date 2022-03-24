import jwt from 'jsonwebtoken';
import { CONFIG_JWT } from '../database/config';
import { UsuarioModel } from '../models/Usuario';

const signJWT = (user: UsuarioModel, callback: (error: Error | null, token: string | null) => void ): void => {
    var timeSinceEpoch = new Date().getTime();
    var expirationTime = timeSinceEpoch + Number(CONFIG_JWT.expireTime) * 100000;
    var expirationTimeInSeconds = Math.floor(expirationTime / 1000);

    try{
        jwt.sign({
            usuario: user.usuario
        },
        CONFIG_JWT.secret,
        {
            issuer: CONFIG_JWT.issuer,
            algorithm: 'HS256',
            expiresIn: expirationTimeInSeconds
        },
        (error, token) => {
            if(error){
                callback(error, null);
            }
            else if(token){
                callback(null, token);
            }
        });
    }catch(error){
        callback(error, null);
    }
};

export default signJWT;