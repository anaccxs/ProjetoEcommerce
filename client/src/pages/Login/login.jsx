import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './login.module.css';  // Importa o CSS Module
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
        <Header />
      </header>

      <section className={styles.mainsec}>
        <section className={styles.section1}>
          <h2>Login</h2>

          <div className={styles.form2}>
            <div className={styles.dois}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.dois}>
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                value={formData.senha}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.tres}>
              <button type="submit" className={styles.btn} onClick={handleSubmit}>
                Entrar
              </button>
            </div>
          </div>

          <Link className={styles.linkcadastro} to="/Cadastro">Não possui uma conta? - Cadastre-se</Link>
        </section>
      </section>

      <Footer />
    </div>
  );
};

export default Login;
