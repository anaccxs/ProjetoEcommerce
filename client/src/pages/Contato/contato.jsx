// src/pages/Contato/contato.jsx
import React, { useState } from 'react';
import styles from './contato.module.css'; // Importando o CSS Module
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

const Contato = () => {

  return (
    <div>
      <header>
        <Header />
      </header>

      <section className={styles.mainsec}>
        <section className={styles.section1}>
          <h2>Entre em contato</h2>
          <form>
            <div className={styles.nome1}>
              <div className={styles.nome}>
                <label htmlFor="txtnome" className={styles.lbl1}>Nome</label><br />
                <input
                  type="text"
                  className={styles.txtnome}
                  name="nome"
                />
              </div>

              <div className={styles.nome2}>
                <label htmlFor="txtsobrenome" className={styles.lbl1}>Sobrenome</label><br />
                <input
                  type="text"
                  className={styles.txtnome}
                  name="sobrenome"
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
                />
              </div>

              <div className={styles.dois}>
                <label htmlFor="assunto" className={styles.lbl1}>Assunto</label><br />
                <input
                  type="text"
                  className={styles.assunto}
                  name="assunto"
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
