# Projeto Vite + React com Backend Node.js

Este projeto é uma aplicação full stack que utiliza **Vite** no frontend e **Node.js** com **Express** no backend. Ele integra funcionalidades modernas como roteamento no frontend e autenticação segura no backend.

## 🔧 Tecnologias Utilizadas

### Frontend:
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- [React Router DOM](https://reactrouter.com/)

### Backend:
- [Express](https://expressjs.com/)
- [CORS](https://github.com/expressjs/cors)
- [Sequelize](https://sequelize.org/)
- [SQLite3](https://www.sqlite.org/index.html) via `@sequelize/sqlite3`
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [Multer](https://github.com/expressjs/multer) (upload de arquivos)
- [Bcrypt.js](https://github.com/dcodeIO/bcrypt.js) (hash de senhas)
- [dotenv](https://github.com/motdotla/dotenv) (configuração de variáveis de ambiente)

---

## ⚙️ Configuração e Instalação

1. **Clone o repositório**:
   ```bash
   git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/anaccxs/ProjetoEcommerce.git)
   cd ProjetoEcommerce

2. **Instale as dependências**:
   ```bash
   cd client
   npm install axios react-router-dom

3. **Instale as dependências no servidor**:
   ```bash
   cd server
   npm install cors express bcryptjs sequelize @sequelize/sqlite3 jsonwebtoken multer dotenv
