import React from 'react';
import './home.css';  // Certifique-se de que você tem o arquivo de estilos correto.

const Home = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <div>
          <h3 id="logo">Ousadia</h3>
          <div id="topicos">
            <nav>
              <ul id="nav-ul">
                <a href=""><li id="home">Página Inicial</li></a>
                <a href=""><li id="produtos">Produtos</li></a>
                <a href=""><li id="menu-gallery">Contato</li></a>
                <a href=""><li>Cadastro</li></a>
              </ul>
            </nav>
          </div>

          <div id="icones">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="sociais-svg">
              {/* SVG Path here */}
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className="sociais-svg">
              {/* SVG Path here */}
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" className="sociais-svg">
              {/* SVG Path here */}
            </svg>
          </div>
        </div>
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

      {/* Footer */}
      <footer>
        <section id="section4">
          <div id="sociais">
            <p id="siga">NOS SIGA!</p>
            <div id="footer-icones">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="footer-svg">
                {/* SVG Path here */}
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className="footer-svg">
                {/* SVG Path here */}
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" className="footer-svg">
                {/* SVG Path here */}
              </svg>
            </div>
          </div>

          <div id="departamentos">
            <p id="dep-tit">DEPARTAMENTOS</p>
            <p className="dep-p">Início</p>
            <p className="dep-p">Produtos</p>
            <p className="dep-p">Contato</p>
            <p className="dep-p">Política de Privacidade</p>
            <p className="dep-p">Trocas e Devoluções</p>
            <p className="dep-p">Quem Somos</p>
          </div>

          <div id="footer-contato">
            <p id="dep-tit">ENTRE EM CONTATO</p>
            <p className="dep-p">3199306-2058</p>
            <p className="dep-p">contato@ousadiabrasil.com.br</p>
            <p className="dep-p">Mercado Novo - Av. Olegário Maciel, 742 - Centro, Belo Horizonte - MG, 30180-112</p>
          </div>

          <div id="footer-parceiras">
            <p id="dep-tit">MARCAS &nbsp;PARCEIRAS</p>
            <p className="dep-p">Baw</p>
            <p className="dep-p">Kenner</p>
            <p className="dep-p">Lacoste</p>
            <p className="dep-p">Kimura</p>
            <p className="dep-p">Vents</p>
            <p className="dep-p">Oakley</p>
            <p className="dep-p">Nike</p>
            <p className="dep-p">Entre Outras</p>
          </div>

          <div id="linha-footer"></div>
        </section>
      </footer>
    </div>
  );
};

export default Home;
