const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './bd/ousadia.sqlite'
})
module.exports = sequelize;