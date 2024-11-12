import React from 'react';
import './baw.css'
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header'

const Baw = () => {
  return (
    <>
      <header>
            <Header />
      </header>

      <section id="section1">
        <h2 id="tit">90's Kids</h2>
        <div id="fotos">
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
            <img src="baw-modelo6.jpeg" id="baw6" alt="CAMISA SMASH BAW CREW" />
            <h2>CAMISA SMASH BAW CREW - R$80,00</h2>
          </div>
        </div>
      </section>

      <section id="section2">
        <h2 id="tit">VINTAGE</h2>
        <div id="fotos">
          <div>
            <img src="vintage-modelo1.jpeg" alt="MOLETOM BAW CREW" />
            <h2>MOLETOM BAW CREW - R$130,00</h2>
          </div>
          <div>
            <img src="vintage-modelo2.jpeg" alt="DAD HAT PATCH PLAID" />
            <h2>DAD HAT PATCH PLAID - R$90,00</h2>
          </div>
          <div>
            <img src="vintage-modelo3.jpeg" alt="CAMISA MANGA LONGA PLAID" />
            <h2>CAMISA MANGA LONGA PLAID - R$100,00</h2>
          </div>
          <div>
            <img src="vintage-modelo4.jpeg" alt="POCHETE PATCH PLAID" />
            <h2>POCHETE PATCH PLAID - R$130,00</h2>
          </div>
          <div>
            <img src="vintage-modelo5.jpeg" alt="CALÇA JEANS OVERSIZED CARGO" />
            <h2>CALÇA JEANS OVERSIZED CARGO - R$150,00</h2>
          </div>
          <div>
            <img src="vintage-modelo6.jpeg" id="vintage6" alt="CAMISA SMASH BAW CREW" />
            <h2>CAMISA SMASH BAW CREW - R$80,00</h2>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Baw;
