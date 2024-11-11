const express = require('express');
const produtos = require('../models/produtos');
const router = express.Router();


// Rota para listar usuários buscar dados
router.get('/produtos', async (req, res) => {
  const produtos = await produtos.findAll();
  res.json(livros);
});

// Rota para adicionar usuário enviar dados
router.post('/produtos', async (req, res) => {
  const { name, preco, marca } = req.body;
  const newProduto = await livros.create({ name, preco, marca});
  res.json(newProduto);
});

// Rota para editar usuário 
router.put('/produtos/:id', async (req, res) => {
  const { name, preco, marca } = req.body;
  const { id } = req.params;
  await produtos.update({ name, preco, marca }, { where: { id } });
  res.json({ message: 'produto atualizado com sucesso' });
});

// Rota para deletar usuário 
router.delete('/produtos/:id', async (req, res) => {
  const { id } = req.params;
  await produtos.destroy({ where: { id } });
  res.json({ message: 'produto deletado com sucesso' });
});

module.exports =  router;