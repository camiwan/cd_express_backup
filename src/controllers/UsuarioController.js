import Usuario from '../models/UsuarioModel';

class UsuarioController{
  async index(req, res){
    try {

      console.log("ID do usuario: "+req.usuario_id );
      console.log("Email do usuario: "+req.usuario_email);

      const usuarios = await Usuario.findAll({
        attributes: [
          'id',
          'nome',
          'email'
        ]});

      if(usuarios.length <= 0){
        return res.status(400).json({
          errors: ['Nenhum registro encontrado']
        })
      }
      return res.json(usuarios);
    } catch (e) {

      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : ["Erro desconhecido ao buscar os dados no banco"]

      });

    }
  }

  async show(req, res){
    try {


      if(!req.params.id){
        return res.status(400).json({
          error: ['Parametro id não foi localizado']
        });
      }

      const usuario = await Usuario.findByPk(req.params.id);

      if(!usuario){
        return res.status(400).json({
          errors: ['Usuário não localizado']
        });
      }

      const {id, nome, email } = usuario;
      return res.json({id, nome, email });
  } catch (e) {

    return res.status(400).json({
      errors: e.errors ? e.errors.map((err) => err.message) : ["Erro desconhecido ao buscar os dados no banco"]

    });

    }
  }
  async update(req, res){
    try {

      const usuario = await Usuario.findByPk(req.usuario_id);

      if(!usuario){
        return res.status(400).json({
          errors: ['Usuário não localizado']
        });
      }

      const updateUsuario = usuario.update(req.body);

      return res.json(updateUsuario);

    } catch (e) {

        return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : ["Erro desconhecido ao buscar os dados no banco"]

      });

    }
  }

  async delete(req, res){
    try {

        const usuario = await Usuario.findByPk(req.usuario_id);

      if(!usuario){
        return res.status(400).json({
          errors: ["Usuario não localizado"]
        });
      }

      await usuario.destroy();
      return res.json({ usuario_apagado: true, });
    } catch (e) {
      //console.log(e)
      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : ["Erro desconhecido ao buscar os dados no banco"]

      });
    }
  }

  async store(req, res){
    try{
      const { nome, email, tipo_de_acesso, password, empresa_id  } = req.body;

            // Verifica se todos os campos estão presentes
      if (!nome || !email || !tipo_de_acesso || !password || !empresa_id) {
        return res.status(400).json({
          errors: ["Campos são obrigatórios: nome, email, tipo_de_acesso, password e empresa_id"]
        });
      }

      // Limpa os campos do usuário
      Object.keys(req.body).forEach(key => {
        if (typeof req.body[key] === 'string') {
          req.body[key] = req.body[key].trim(); // Remove espaços em branco no início e no final
        }
      });

      // Verifica se o nome tem entre 3 e 255 caracteres
      if (nome.length < 3 || nome.length > 255) {
        return res.status(400).json({
          errors: ["O nome deve ter entre 3 e 255 caracteres!"]
        });
      }

      // Verifica se o email é válido
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        return res.status(400).json({
          errors: ["Ops! Formato de email inválido"]
        });
      }

      // Verifica se a senha tem entre 6 e 255 caracteres
      if (password.length < 6 || password.length > 255) {
        return res.status(400).json({
          errors: ["A senha deve ter entre 6 e 255 caracteres"]
        });
      }
      const createUsuario = await Usuario.create(req.body);
     // const {id, nome_usuario, email_usuario} = createUsuario;
      res.json(createUsuario);
    }catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : ["Erro desconhecido ao salvar usuário."]
      });
    }
  }

}

export default new UsuarioController();
