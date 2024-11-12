import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Lacoste = () => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <section id="section1">
        <h2 id="tit">Polos e Mais</h2>
        <div id="fotos">
          <div>
            <img src="lacoste-modelo1.jpeg" alt="" />
            <h2>POLO L.12.12 MANGA LONGA - R$100,00</h2>
          </div>
          <div>
            <img src="lacoste-modelo2.jpeg" alt="" />
            <h2>POLO CROPPED FEMININA - R$140,00</h2>
          </div>
          <div>
            <img src="lacoste-modelo3.jpeg" alt="" />
            <h2>POLO INFANTIL - R$130,00</h2>
          </div>
          <div>
            <img src="lacoste-modelo4.jpeg" alt="" />
            <h2>BOBOJACO FEMININO - R$200,00</h2>
          </div>
          <div>
            <img src="lacoste-modelo5.jpeg" alt="" />
            <h2>SHORT MASCULINO - R$170,00</h2>
          </div>
          <div>
            <img src="lacoste-modelo6.jpeg" id="baw6" alt="" />
            <h2>CORTA VENTO FEMININO - R$200,00</h2>
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
