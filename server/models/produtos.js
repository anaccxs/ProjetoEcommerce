// /models/produtos.js
const { DataTypes } = require('sequelize');
const sequelize = require('../bd/bd');

const Produtos = sequelize.define('Produtos', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preco: {
    type: DataTypes.INTEGER,
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = Produtos;
