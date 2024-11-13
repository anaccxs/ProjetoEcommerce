import React, { useState } from 'react';
import styles from './contato.module.css'; // Importando o CSS Module
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    assunto: '',
    mensagem: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nome, sobrenome } = formData;
    alert(`Mensagem enviada por: ${nome} ${sobrenome}`);
  };

  return (
    <div>
      <header>
        <Header />
      </header>

      <section className={styles.mainsec}>
        <section className={styles.section1}>
          <div className={styles.form}>
            <h2>Entre em contato</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.nome1}>
              <div className={styles.nome}>
                <label htmlFor="txtnome" className={styles.lbl1}>Nome</label><br />
                <input
                  type="text"
                  className={styles.txtnome}
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.nome}>
                <label htmlFor="txtsobrenome" className={styles.lbl1}>Sobrenome</label><br />
                <input
                  type="text"
                  className={styles.txtnome}
                  name="sobrenome"
                  value={formData.sobrenome}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.form2}>
              <div className={styles.dois}>
                <label htmlFor="email" className={styles.lbl1}>Email</label><br />
                <input
                  type="email"
                  className={styles.email}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.dois}>
                <label htmlFor="assunto" className={styles.lbl1}>Assunto</label><br />
                <input
                  type="text"
                  className={styles.assunto}
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.tres}>
                <label htmlFor="txtmensagem" className={styles.lbl1}>Mensagem</label><br />
                <textarea
                  className={styles.txtmensagem}
                  name="mensagem"
                  cols="30"
                  rows="10"
                  placeholder="Escreva sua mensagem aqui :)"
                  value={formData.mensagem}
                  onChange={handleChange}
                ></textarea>
                <input type="submit" className={styles.btn} value="Enviar mensagem" />
              </div>
            </div>
          </form>
        </section>

        <section className={styles.section2}>
          <div className={styles.endereco}>
            <h2>Onde nos encontrar?</h2>
            <a href="https://goo.gl/maps/eDtNKKRhxwtW3HZx8">
              <p>Mercado Novo - Av. Olegário Maciel, 742 - Centro, Belo Horizonte - MG, 30180-112</p>
            </a>
          </div>

          <div className={`${styles.endereco} ${styles.tel}`}>
            <h2>Telefone</h2>
            <a href="tel:+313993062058"><p>(31) 99306-2058</p></a>
          </div>

          <div className={styles.endereco}>
            <h2>Email</h2>
            <p>contato@ousadiabrasil.com.br</p>
          </div>
        </section>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
