import React from 'react';
import './home.css';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header'

const Home = () => {
  return (
    <div>
      <header>
       <Header />
      </header>

      {/* Section 1 */}
      <section>
        <div id="kyan">
          <img src="kyan-inicial.jpg" alt="Kyan" width="1300px" />
        </div>
        <h3 id="lacoste">LACOS<br /><span id="ano">2023</span><span id="te">TE</span></h3>
        <article id="nov">LANÇAMENTOS</article>
      </section>

      {/* Section 2 */}
      <section id="section2">
        <div id="roupas" className="gemeas">
          <h2 id="moletons">MOLETONS</h2>
          <h2 className="compra">SAIBA MAIS</h2>
        </div>
        <div id="roupas" className="lentes">
          <h2 id="moletons">LENTES</h2>
          <h2 className="compra">SAIBA MAIS</h2>
        </div>
        <div id="roupas" className="polos">
          <h2 id="moletons">POLOS</h2>
          <h2 className="compra">SAIBA MAIS</h2>
        </div>
        <div id="roupas" className="tenis">
          <h2 id="moletons">TÊNIS</h2>
          <h2 className="compra">SAIBA MAIS</h2>
        </div>
      </section>

      <div id="linha"></div>

      {/* Section 3 */}
      <section id="section3">
        <div id="lancamentos">
          <h2>BDA 7 ANOS</h2>
          <p>No grande evento de comemoração de 7 anos <br /> da Batalha da Aldeia, o MC Magrão usava <br /> seu moletom da Tropa da Vents. <br />Juntamente com outros MCs que representam a <br />cena e ao mesmo tempo, são grande referência <br />da moda de rua. </p>
          <article>Garanta já o seu por apenas <span id="preco">$80,00!</span></article>
        </div>
        <div id="magrao">
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
