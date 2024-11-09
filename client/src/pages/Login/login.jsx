import React, { useState } from 'react';
import './login.css';
import Header from './Header';

const Contato = () => {
  // Estado para armazenar os valores dos campos do formulário
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode lidar com a lógica de envio do formulário
    alert(`Mensagem enviada por: ${nome} ${sobrenome}`);
  };

  return (
    <div>
      <header>
        <Header />
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
