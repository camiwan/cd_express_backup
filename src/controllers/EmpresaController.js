//const path = require('path');

import Empresa from "../models/EmpresaModel";

class EmpresaController{
  constructor(body){
    this.body = body;
    this.errors = [];
    this.empresa = null;
  }

  async index(req, res){
    const empresas = await Empresa.findAll();
      if(empresas.length <= 0){
        return res.status(400).json({
          errors: ['Nenhum registro encontrado']
        })
      }

      return res.json(empresas);
    } catch (e) {

      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : ["Erro desconhecido ao buscar os dados no banco"]

      });
  }

  async show(req, res){
    try {

      const { id } = req.params;
      if(!id){
        return res.status(400).json({
          errors: ["Parametro id não foi localizado"]
        });
      }

      const empresa = await Empresa.findByPk(id);
      if(!empresa){
        return res.status(400).json({
          errors: ["Empresa não localizada"]
        });
      }

      return res.json(empresa);
  } catch (e) {
    return res.status(400).json({
      errors: e.errors ? e.errors.map((err) => err.message) : ["Erro desconhecido ao buscar empresa."]

    });
    }
  }// fim de show()

  async create(req, res){
    try {

    } catch (error) {

    }
  }

  async update(req, res){
    try {

    } catch (error) {

    }
  }

  async delete(req, res){

    try {

      const { id } = req.params;

      if(!id){
        return res.status(400).json({
          error: ["Parametro id não foi localizado"]
        });
      }

      const empresa = await Empresa.findByPk(id);

      if(!empresa){
        return res.status(400).json({
          errors: ["Empresa não localizado"]
        });
      }

      await empresa.destroy();
      return res.json({
        empresa_apagada: true,
      });

    } catch (e) {
      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : ["Erro desconhecido ao excluir empresa."]
      });
    }

  }

  async store(req, res){
    try {

    } catch (error) {

    }
  }

}

export default new EmpresaController();
