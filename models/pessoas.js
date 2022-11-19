'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Telefone,{
        as:'telefone'
      })
    }
  }
  Pessoas.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    data_nascimento:{
     type: DataTypes.DATEONLY,
      get(){
        const rawValue = this.getDataValue('data_nascimento')
        return rawValue ? rawValue.split('-').reverse().join('/'):null
      },
    } 
  }, {
    sequelize,
    modelName: 'Pessoas',
    tableName: 'pessoas'
  });
  return Pessoas;
};