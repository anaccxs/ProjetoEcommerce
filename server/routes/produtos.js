// /routes/produtos.js
const express = require('express');
const roupas = require('../models/produtos');
const router = express.Router();


// Rota para listar usuários buscar dados
router.get('/roupas', async (req, res) => {
  const roupas = await roupas.findAll();
  res.json(roupas);
});

// Rota para adicionar usuário enviar dados
router.post('/roupas', async (req, res) => {
  const { name, preco, marca } = req.body;
  const newProduto = await roupas.create({ name, preco, marca});
  res.json(newProduto);
});

// Rota para editar usuário 
router.put('/roupas/:id', async (req, res) => {
  const { name, preco, marca } = req.body;
  const { id } = req.params;
  await roupas.update({ name, preco, marca }, { where: { id } });
  res.json({ message: 'produto atualizado com sucesso' });
});

// Rota para deletar usuário 
router.delete('/roupas/:id', async (req, res) => {
  const { id } = req.params;
  await roupas.destroy({ where: { id } });
  res.json({ message: 'produto deletado com sucesso' });
});

module.exports =  router;