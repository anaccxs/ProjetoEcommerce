import React from 'react';
import styles from './lacoste.module.css'; // CSS Module
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Lacoste = () => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <section className={styles.section1}>
        <h1>LACOSTE</h1>
        <h3>Polos e Mais</h3>
        <div className={styles.fotos}>
          <div>
            <img src="lacoste-modelo1.jpeg" alt="Modelo 1" />
            <h2>POLO L.12.12 MANGA LONGA <br /> R$100,00</h2>
          </div>
          <div>
            <img src="lacoste-modelo2.jpeg" alt="Modelo 2" />
            <h2>POLO CROPPED FEMININA <br /> R$140,00</h2>
          </div>
          <div>
            <img src="lacoste-modelo3.jpeg" alt="Modelo 3" />
            <h2>POLO INFANTIL <br /> R$130,00</h2>
          </div>
          <div>
            <img src="lacoste-modelo4.jpeg" alt="Modelo 4" />
            <h2>BOBOJACO FEMININO <br /> R$200,00</h2>
          </div>
          <div>
            <img src="lacoste-modelo5.jpeg" alt="Modelo 5" />
            <h2>SHORT MASCULINO <br /> R$170,00</h2>
          </div>
          <div>
            <img src="lacoste-modelo6.jpeg" alt="Modelo 6" />
            <h2>CORTA VENTO FEMININO <br /> R$200,00</h2>
          </div>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Lacoste;
