import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class Usuario extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique:{
          msg: 'E-mail já existe na base de dados'
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido',
          },
        },
      },
      tipo_de_acesso:{
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue:'',
        validate: {
          len: {
            args: [6, 8],
            msg: 'A senha precisa ter entre 6 e 8 caracteres',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Usuario', tableName:'usuarios'
    });

    this.addHook('beforeSave', async (usuario) => {
      if(usuario.password){
        usuario.password_hash = await bcryptjs.hash(usuario.password, 8);
      }
    });
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Empresa, {foreignKey: 'empresa_id'});
}

  passwordIsValid(password){
    return bcryptjs.compare(password, this.password_hash);
  }
}
