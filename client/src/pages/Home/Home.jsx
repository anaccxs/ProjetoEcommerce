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

      {/* Section 1 */}
      <section>
        <div className={styles.kyan}>
          <img src="kyan-inicial.jpg" alt="Kyan" width="1300px" />
        </div>
        <h3 className={styles.lacoste}>
          LACOS<br /><span className={styles.ano}>2023</span><span className={styles.te}>TE</span>
        </h3>
        <article className={styles.nov}>LANÇAMENTOS</article>
      </section>

      {/* Section 2 */}
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
            No grande evento de comemoração de 7 anos <br /> da Batalha da Aldeia, o MC Magrão usava <br />
            seu moletom da Tropa da Vents. <br />Juntamente com outros MCs que representam a <br />
            cena e ao mesmo tempo, são grande referência <br />da moda de rua.
          </p>
          <article>Garanta já o seu por apenas <span className={styles.preco}>$80,00!</span></article>
        </div>
        <div className={styles.magrao}>
          <img src="bda.jpg" alt="BDA" width="650px" />
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
