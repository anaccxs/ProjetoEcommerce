// criarTabela.js
const sequelize = require('./bd/bd');
const Produtos = require('./models/produtos');
const User = require('./models/user');

sequelize.sync({ force: true }).then(() => {
  console.log('Banco de dados sincronizado.');
}).catch((error) => {
  console.error('Erro ao sincronizar banco de dados:', error);
});
