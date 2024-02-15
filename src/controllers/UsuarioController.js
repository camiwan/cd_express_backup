import Usuario from '../models/UsuarioModel';

class UsuarioController{
  async index(req, res){
    try {

      const usuarios = await Usuario.findAll();
      console.log(usuarios)

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

      const { id } = req.params;
      if(!id){
        return res.status(400).json({
          error: ['Parametro id não foi localizado']
        });
      }

      const usuario = await Usuario.findByPk(id);
      if(!usuario){
        return res.status(400).json({
          errors: ['Usuário não localizado']
        });
      }

      return res.json(usuario);
  } catch (e) {

    return res.status(400).json({
      errors: e.errors ? e.errors.map((err) => err.message) : ["Erro desconhecido ao buscar os dados no banco"]

    });

    }
  }

  async update(req, res){
    try {
      const { id } = req.params;
      if(!id){
        return res.status(400).json({
          error: ['Parametro id não foi localizado']
        });
      }

      const usuario = await Usuario.findByPk(id);
      if(!usuario){
        return res.status(400).json({
          errors: ['Usuário não localizado']
        });
      }

      const usuarioAtualizado = usuario.update(req.body);
      return res.json(usuarioAtualizado);

    } catch (e) {

        return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : ["Erro desconhecido ao buscar os dados no banco"]

      });

    }
  }

  async delete(req, res){
    try {
      const { id } = req.params;

      if(!id){
        return res.status(400).json({
          error: ['Parametro id não foi localizado']
        });
      }

      const usuario = await Usuario.findByPk(id);
      if(!usuario){
        return res.status(400).json({
          errors: ['Usuário não localizado']
        });
      }

      await usuario.destroy();
      return res.json({
        usuario_apagado: true,
      });

    } catch (e) {
      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : ["Erro desconhecido ao buscar os dados no banco"]

      });

    }
  }

  async store(req, res){

    try{
      const creatUsuario = await Usuario.create(req.body);
      res.json(creatUsuario);
    }catch (e) {
      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : ["Erro desconhecido ao salvar usuário."]
      });
    }
  }

}

export default new UsuarioController();
