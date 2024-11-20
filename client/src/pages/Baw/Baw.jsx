// src/pages/Baw/Baw.jsx
import React from 'react'; 
import styles from './baw.module.css';  // Importando o CSS Module
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

const Baw = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <section className={styles.section1}>
        <h1>BAW</h1>
        <h3>90's Kids</h3>
        <div className={styles.fotos}>
          <div>
            <img src="baw-modelo1.jpeg" alt="MOLETOM BAW CREW" />
            <h2>MOLETOM BAW CREW - R$130,00</h2>
          </div>
          <div>
            <img src="baw-modelo2.jpeg" alt="DAD HAT PATCH PLAID" />
            <h2>DAD HAT PATCH PLAID - R$90,00</h2>
          </div>
          <div>
            <img src="baw-modelo3.jpeg" alt="CAMISA MANGA LONGA PLAID" />
            <h2>CAMISA MANGA LONGA PLAID - R$100,00</h2>
          </div>
          <div>
            <img src="baw-modelo4.jpeg" alt="POCHETE PATCH PLAID" />
            <h2>POCHETE PATCH PLAID - R$130,00</h2>
          </div>
          <div>
            <img src="baw-modelo5.jpeg" alt="CALÇA JEANS OVERSIZED CARGO" />
            <h2>CALÇA JEANS OVERSIZED CARGO - R$150,00</h2>
          </div>
          <div>
            <img src="baw-modelo6.jpeg" alt="CAMISA SMASH BAW CREW" />
            <h2>CAMISA SMASH BAW CREW - R$80,00</h2>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Baw;
