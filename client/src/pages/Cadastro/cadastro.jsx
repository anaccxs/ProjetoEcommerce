import React, { useState } from 'react';
import './cadastro.css';  // Importa o CSS
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Cadastro = () => {
  // State para gerenciar os dados do formulário
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    assunto: '',
    mensagem: '',
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
        <Header/>
      </header>

      <section id="mainsec">
        <section id="section1">
          <div id="form">
            <h2>Cadastrar</h2>
          </div>

          <div className="nome">
            <div>
              <label htmlFor="nome">Nome</label><br />
              <input
                type="text"
                id="nome"
                name="nome"
                className='txtnome'
                value={formData.nome}
                onChange={handleInputChange}
              />
            </div>

            <div id="nome2">
              <label htmlFor="sobrenome">Sobrenome</label><br />
              <input
                type="text"
                id="sobrenome"
                name="sobrenome"
                className='txtnome'
                value={formData.sobrenome}
                onChange={handleInputChange}
              />
            </div>
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
              <label htmlFor="assunto">Assunto</label><br />
              <input
                type="text"
                id="assunto"
                name="assunto"
                value={formData.assunto}
                onChange={handleInputChange}
              />
            </div>

            <div id="tres">
              <button type="submit" id="btn" onClick={handleSubmit}>
                Cadastrar
              </button>
            </div>
          </div>
        </section>
        <p>Já possui uma conta?</p>
      </section>

      <Footer/>
    </div>
  );
};

export default Cadastro;
