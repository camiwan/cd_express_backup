import jwt from 'jsonwebtoken';
import Usuario from '../models/UsuarioModel';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['É necessário fazer login!'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const usuario = await Usuario.findOne({
      where:{
        id,
        email,
      }
    })

    if(!usuario){
      return res.status(401).json({
        errors: ['Usuáro é inválido']
      });

    }

    req.usuario_id = id;
    req.usuario_email = email;
    return next();
  } catch (error) {
    return res.status(401).json({
      errors: ['Token inválido ou expirado']
    });
  }
};
