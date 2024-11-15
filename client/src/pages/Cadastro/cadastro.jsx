import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './cadastro.module.css';  // Importa o CSS Module
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Cadastro = () => {
  // State para gerenciar os dados do formulário
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: ''
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
    console.log('Dados enviados:', formData);
  };

  return (
    <div>
      <header>
        <Header />
      </header>

      <section className={styles.mainsec}>
        <section className={styles.section1}>
          <h2>Cadastrar</h2>

          <div className={styles.nome}>
            <div className={styles.nome1}>
              <label htmlFor="nome" className={styles.lbl1}>Nome</label><br />
              <input
                type="text"
                name="nome"
                className={styles.txtnome}
                value={formData.nome}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.nome2}>
              <label htmlFor="sobrenome" className={styles.lbl1}>Sobrenome</label><br />
              <input
                type="text"
                name="sobrenome"
                className={styles.txtnome}
                value={formData.sobrenome}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className={styles.form2}>
            <div className={styles.dois}>
              <label htmlFor="email" className={styles.lbl1}>Email</label><br />
              <input
                type="email"
                name="email"
                className={styles.email}
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.tres}>
              <button type="submit" className={styles.btn} onClick={handleSubmit}>
                Cadastrar
              </button>
            </div>
          </div>
        </section>
        <Link className={styles.linklogin} to={"/Login"}>Já possui uma conta?</Link>
      </section>

      <Footer />
    </div>
  );
};

export default Cadastro;
