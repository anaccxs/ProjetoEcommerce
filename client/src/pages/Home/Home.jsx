// src/pages/Home/Home.jsx
import React from 'react';
import styles from './home.module.css';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

const Home = () => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <section>
        <h3 className={styles.lacoste}>
          <div>
            <span className={styles.lacosteTxt}>LACOSTE</span>
            <span className={styles.ano}>2024</span>
          </div>
        </h3>
        <div className={styles.lacosteImg}>
          <img src="lacoste-nova.jpg" />
        </div>
        <h3 className={styles.h3}>LANÇAMENTOS</h3>
      </section>

      <section className={styles.section2}>
        
        <div className={`${styles.roupas} ${styles.gemeas}`}>
          <h2 className={styles.moletons}>MOLETONS</h2>
          <h2 className={styles.compra}>SAIBA MAIS</h2>
        </div>
        <div className={`${styles.roupas} ${styles.lentes}`}>
          <h2 className={styles.moletons}>LENTES</h2>
          <h2 className={styles.compra}>SAIBA MAIS</h2>
        </div>
        <div className={`${styles.roupas} ${styles.polos}`}>
          <h2 className={styles.moletons}>POLOS</h2>
          <h2 className={styles.compra}>SAIBA MAIS</h2>
        </div>
        <div className={`${styles.roupas} ${styles.tenis}`}>
          <h2 className={styles.moletons}>TÊNIS</h2>
          <h2 className={styles.compra}>SAIBA MAIS</h2>
        </div>
      </section>

      <div className={styles.linha}></div>

      {/* Section 3 */}
      <section className={styles.section3}>
        <div className={styles.lancamentos}>
          <h2>BDA 7 ANOS</h2>
          <p>
            No grande evento de comemoração de 7 anos da Batalha da Aldeia, o MC Magrão usava
            seu moletom da Tropa da Vents. Juntamente com outros MCs que representam a
            cena e ao mesmo tempo, são grande referênciada moda de rua.
          </p>
          <article>Garanta já o seu por apenas <span className={styles.preco}>$80,00!</span></article>
        </div>
        <div className={styles.magrao}>
          <img src="bda.jpg" alt="BDA" />
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
