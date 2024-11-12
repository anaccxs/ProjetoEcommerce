import React from 'react';
import Header from '../../components/header/Header';
import './produtos.css';
import Footer from '../../components/footer/Footer';


const Produtos = () => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <section id="section1">
        <h2>Coleção 90's Kids - Baw</h2>
        <div id="baw1">
          <div>
            <img src="baw-modelo1.jpeg" width="220px" className="baw-modelos" />
            <h2 className="precos">R$130,00</h2>
          </div>
          <div>
            <img src="baw-modelo2.jpeg" width="220px" className="baw-modelos" />
            <h2 className="precos">R$90,00</h2>
          </div>
          <div>
            <img src="baw-modelo3.jpeg" width="220px" className="baw-modelos" />
            <h2 className="precos">R$100,00</h2>
          </div>
          <div>
            <img src="baw-modelo4.jpeg" width="220px" className="baw-modelos" />
            <h2 className="precos">R$65,00</h2>
          </div>
          <div>
            <img src="baw-modelo5.jpeg" width="220px" className="baw-modelos" />
            <h2 className="precos">R$150,00</h2>
          </div>
          <div>
            <img src="baw-modelo6.jpeg" width="220px" className="baw-modelos" />
            <h2 className="precos">R$120,00</h2>
          </div>
        </div>
      </section>

      <section id="section2">
        <h2>Polos e Mais - Lacoste</h2>
        <div id="lacoste"> 
          <div>
            <img src="lacoste-modelo1.jpeg" width="243px" className="baw-modelos" />
            <h2 className="precos">R$100,00</h2>
          </div>
          <div>
            <img src="lacoste-modelo2.jpeg" width="243px" className="baw-modelos" />
            <h2 className="precos">R$140,00</h2>
          </div>
          <div>
            <img src="lacoste-modelo3.jpeg" width="263px" className="baw-modelos" id="lacoste3" />
            <h2 className="precos">R$130,00</h2>
          </div>
          <div>
            <img src="lacoste-modelo4.jpeg" width="225px" className="baw-modelos" />
            <h2 className="precos">R$200,00</h2>
          </div>
          <div>
            <img src="lacoste-modelo5.jpeg" width="220px" className="baw-modelos" />
            <h2 className="precos" id="lacoste5">R$170,00</h2>
          </div>
          <div>
            <a href="lacoste.html">
              <h3>SAIBA MAIS</h3>
            </a>
            <img src="seta.png" width="115px" id="seta" />
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
