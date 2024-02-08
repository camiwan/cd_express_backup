import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class Usuario extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
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
        validade: {
          isEmail: {
            msg: 'E-mail inválido',
          },
        },
      },
      tipo_acesso:{
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          len: {
            args: [3, 255],
            msg: 'Campo senha deve ter entre 3 e 255 caracteres',
          },
        },
      },
      // password: {
      //   type: Sequelize.VIRTUAL,
      //   defaultValue: '',
      //   validade: {
      //     len: {
      //       args: [6, 50],
      //       msg: 'A senha precisa ter entre 6 e 50 caracteres',
      //     },
      //   },
      // },
    }, 
    {
      sequelize,
      modelName: 'Usuario', tableName:'usuarios' 
    });

    this.addHook('beforeSave', async user =>{
      if(user.password){
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    })
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Empresa, {foreignKey: 'empresaId'});
}

  passwordIsValid(password){
    return bcryptjs.compare(password, this.password_hash);
  }
}
