import React, { useState } from 'react';
import './contato.css';

const Contato = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Mensagem enviada por: ${nome} ${sobrenome}`);
  };

  return (
    <div>
      <header>
        <div>
          <h3 id="logo">Ousadia</h3>
          <div id="topicos">
            <nav>
              <ul id="nav-ul">
                <li id="home"><a href="inicio.html">Página Inicial</a></li>
                <li id="produtos"><a href="produtos.html">Produtos</a></li>
                <li id="menu-gallery"><a href="contato.html">Contato</a></li>
                <li><a href="#">Cadastro</a></li>
              </ul>
            </nav>
          </div>

          <div id="icones">
            {/* Ícones SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="sociais-svg">
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
            </svg>
            {/* Adicione os outros SVGs */}
          </div>
        </div>
      </header>

      <section id="mainsec">
        <section id="section1">
          <div id="form">
            <h2>Entre em contato</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div id="nome">
              <div id="nome1">
                <label htmlFor="txtnome" id="lbl1">Nome</label><br />
                <input 
                  type="text" 
                  id="txtnome" 
                  value={nome} 
                  onChange={(e) => setNome(e.target.value)} 
                />
              </div>

              <div id="nome2">
                <label htmlFor="txtsobrenome" id="lbl1">Sobrenome</label><br />
                <input 
                  type="text" 
                  id="txtsobrenome" 
                  value={sobrenome} 
                  onChange={(e) => setSobrenome(e.target.value)} 
                />
              </div>
            </div>
            <div id="form2">
              <div id="dois">
                <label htmlFor="email" id="lbl1">Email</label><br />
                <input 
                  type="email" 
                  id="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>

              <div id="dois">
                <label htmlFor="assunto" id="lbl1">Assunto</label><br />
                <input 
                  type="text" 
                  id="assunto" 
                  value={assunto} 
                  onChange={(e) => setAssunto(e.target.value)} 
                />
              </div>

              <div id="tres">
                <label htmlFor="txtmensagem" id="lbl1">Mensagem</label><br />
                <textarea 
                  id="txtmensagem" 
                  cols="30" 
                  rows="10" 
                  placeholder="Escreva sua mensagem aqui :)"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                ></textarea>
                <input type="submit" value="Enviar mensagem" id="btn" />
              </div>
            </div>
          </form>
        </section>

        <section id="section2">
          <div className="endereco">
            <h2>Onde nos encontrar?</h2>
            <a href="https://goo.gl/maps/eDtNKKRhxwtW3HZx8">
              <p>Mercado Novo - Av. Olegário Maciel, 742 - Centro, Belo Horizonte - MG, 30180-112</p>
            </a>
          </div>

          <div className="endereco" id="tel">
            <h2>Telefone</h2>
            <a href="tel:+313993062058"><p>(31) 99306-2058</p></a>
          </div>

          <div className="endereco">
            <h2>Email</h2>
            <p>contato@ousadiabrasil.com.br</p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Contato;
