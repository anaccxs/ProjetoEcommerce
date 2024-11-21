// server/models/produtos.js
// server/models/produtos.js
const { DataTypes } = require('sequelize');
const sequelize = require('../bd/bd');

const Produtos = sequelize.define('Produtos', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = Produtos;
