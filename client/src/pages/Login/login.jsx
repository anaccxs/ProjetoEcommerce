import React, { useState } from 'react';
import './login.css';  // Importa o CSS
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Login = () => {
  // State para gerenciar os dados do formulário
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
  });

  // Função para atualizar o estado dos inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para um servidor ou API, por exemplo
    console.log('Dados de Login:', formData);
  };

  return (
    <div>
      <header>
        <Header/>
      </header>

      <section id="mainsec">
        <section id="section1">
          <div id="form">
            <h2>Login</h2>
          </div>

          <div id="form2">
            <div id="dois">
              <label htmlFor="email">Email</label><br />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div id="dois">
              <label htmlFor="senha">Senha</label><br />
              <input
                type="password"
                id="senha"
                name="senha"
                value={formData.senha}
                onChange={handleInputChange}
              />
            </div>

            <div id="tres">
              <button type="submit" id="btn" onClick={handleSubmit}>
                Entrar
              </button>
            </div>
          </div>

          <p>Não possui uma conta? <a href="cadastro.html">Cadastre-se</a></p>
        </section>
      </section>

      <Footer/>
    </div>
  );
};

export default Login;
