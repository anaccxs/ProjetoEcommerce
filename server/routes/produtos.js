// server/routes/produtos.js
const express = require("express");
const Produto = require("../models/produtos");
const multer = require("multer");
const path = require("path");
const fs = require("fs"); // Usado para garantir a existência da pasta uploads
const router = express.Router();

// Verificar se a pasta uploads existe, caso contrário, criar
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// Configuração do multer para o upload de arquivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Pasta onde as imagens serão armazenadas
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Gera um nome único para cada imagem
  }
});
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    // Garantir que o arquivo seja uma imagem
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Apenas arquivos de imagem são permitidos'));
    }
  }
});

// Rota para listar os produtos
router.get("/produtos", async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar produtos", error });
  }
});

// Rota para adicionar um produto
router.post("/produtos", upload.single('image'), async (req, res) => {
  try {
    // Verificar se todos os campos obrigatórios estão presentes
    const { name, price, brand } = req.body;
    if (!name || !price || !brand) {
      return res.status(400).json({ message: "Nome, preço e marca são obrigatórios" });
    }

    // Verificar se a imagem foi enviada
    if (!req.file) {
      return res.status(400).json({ message: "Imagem é obrigatória" });
    }

    const imageUrl = `/uploads/${req.file.filename}`; // Salva a URL da imagem

    const newProduct = await Produto.create({
      name,
      price,
      brand,
      imageUrl,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Erro ao adicionar produto", error });
  }
});

// Rota para editar um produto
router.put("/produtos/:id", upload.single('image'), async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, brand } = req.body;

    // Verificar se todos os campos obrigatórios estão presentes
    if (!name || !price || !brand) {
      return res.status(400).json({ message: "Nome, preço e marca são obrigatórios" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Imagem é obrigatória" });
    }

    const imageUrl = `/uploads/${req.file.filename}`; // Salva a URL da nova imagem

    await Produto.update(
      { name, price, brand, imageUrl },
      { where: { id } }
    );

    res.json({ message: "Produto atualizado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar produto", error });
  }
});

// Rota para excluir um produto
router.delete("/produtos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Produto.destroy({ where: { id } });
    res.json({ message: "Produto deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao excluir produto", error });
  }
});

module.exports = router;
