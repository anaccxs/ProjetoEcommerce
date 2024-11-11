const express = require('express');
const cors = require('cors');
const produtosRoutes = require('./routes/produtos');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/produtos', produtosRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));