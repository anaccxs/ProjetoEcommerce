// src/pages/Produtos/Produtos
import React from 'react';
import styles from './produtos.module.css'; // CSS Module
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { Link } from 'react-router-dom';

const Produtos = () => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <section className={styles.section1}>
        <Link to="/baw"><h1>BAW</h1>
        <h2>Coleção 90's Kids</h2></Link>
        <div className={styles.baw1}>
          <div>
            <img src="baw-modelo1.jpeg" className={styles.bawModelos} />
            <h2 className={styles.precos}>R$130,00</h2>
            <p className={styles.precos}>BAW</p>
          </div>
          <div>
            <img src="baw-modelo2.jpeg" className={styles.bawModelos} />
            <h2 className={styles.precos}>R$90,00</h2>
            <p className={styles.precos}>BAW</p>
          </div>
          <div>
            <img src="baw-modelo3.jpeg" className={styles.bawModelos} />
            <h2 className={styles.precos}>R$100,00</h2>
            <p className={styles.precos}>BAW</p>
          </div>
          <div>
            <img src="baw-modelo4.jpeg" className={styles.bawModelos} />
            <h2 className={styles.precos}>R$65,00</h2>
            <p className={styles.precos}>BAW</p>
          </div>
          <div>
            <img src="baw-modelo5.jpeg" className={styles.bawModelos} />
            <h2 className={styles.precos}>R$150,00</h2>
            <p className={styles.precos}>BAW</p>
          </div>
          <div>
            <img src="baw-modelo6.jpeg" className={styles.bawModelos} />
            <h2 className={styles.precos}>R$120,00</h2>
            <p className={styles.precos}>BAW</p>
          </div>
        </div>
      </section>

      <section className={styles.section1}>
        <Link to="/lacoste"><h1>LACOSTE</h1> 
        <h2>Polos e Mais</h2> </Link>
        <div className={styles.lacoste}> 
          <div>
            <img src="lacoste-modelo1.jpeg" className={styles.bawModelos} />
            <h2 className={styles.precos}>R$100,00</h2>
            <p className={styles.precos}>LACOSTE</p>
          </div>
          <div>
            <img src="lacoste-modelo2.jpeg" className={styles.bawModelos} />
            <h2 className={styles.precos}>R$140,00</h2>
            <p className={styles.precos}>LACOSTE</p>
          </div>
          <div>
            <img src="lacoste-modelo3.jpeg" className={styles.bawModelos} />
            <h2 className={styles.precos}>R$130,00</h2>
            <p className={styles.precos}>LACOSTE</p>
          </div>
          <div>
            <Link className={styles.txtSaibaMais} to="/lacoste">
              <img src="seta.png" width="115px" className={styles.seta} />
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Produtos;
