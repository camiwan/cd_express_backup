import Usuario from '../models/UsuarioModel';
import jwt from 'jsonwebtoken';

class TokenController{
  async store(req, res){
    const { email = '', password = ''} = req.body;
   // console.log(email, password);

   if(!email || !password){
    return res.status(401).json({
      errors: ['Credenciais inválidas']
    });
  }

   const usuario = await Usuario.findOne({
    where:{
      email
    }
   });
   if(!usuario){
    return res.status(401).json({
      errors: ['Usuário não encontrado']
    });
  }
  if(!(await usuario.passwordIsValid(password))){
    return res.status(401).json({
      errors: ['Senha inválida']
    });
  }

  const { id } = usuario;
    const token = jwt.sign({id, email}, process.env.TOKEN_SECRET,{
      expiresIn: process.env.TOKEN_EXPIRATION
    });

   //return res.json(usuario);
   //return res.json(token);
   // Mandando um objeto e definindo um cookie no servidor

   res.cookie('token', token, { httpOnly: true }); // Define o cookie
   return res.json({
    token
  });


  }
}

export default new TokenController();
