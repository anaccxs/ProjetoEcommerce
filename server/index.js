// server/index.js
const express = require('express');
const cors = require('cors');
const produtosRoutes = require('./routes/produtos');  
const authRoutes = require('./routes/auth');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Servir arquivos estáticos da pasta uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/produtos', produtosRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
