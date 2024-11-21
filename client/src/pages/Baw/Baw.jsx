import React, { useState, useEffect } from 'react'; 
import styles from './baw.module.css';  // Importando o CSS Module
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import ProductList from '../../components/ProductList/ProductList';  // Importando o componente que exibe os produtos
import api from '../../service';  // Se você estiver fazendo requisições à API para carregar os produtos

const Baw = () => {
  const [produtos, setProdutos] = useState([]);

  // Carregar os produtos quando o componente for montado
  useEffect(() => {
    const loadProdutos = async () => {
      try {
        const response = await api.get("/produtos");  // Substitua com o endpoint correto da sua API
        setProdutos(response.data);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    };

    loadProdutos();
  }, []);

  // Filtrando os produtos pela marca 'Baw'
  const filteredProdutos = produtos.filter(produto => produto.brand === 'Baw');
  return (
    <>
      <header>
        <Header />
      </header>

      <section className={styles.section1}>
        <h1>BAW</h1>
        <h3>90's Kids</h3>
        <div className={styles.fotos}>
          <div>
            <img src="baw-modelo1.jpeg" alt="MOLETOM BAW CREW" />
            <h2>MOLETOM BAW CREW</h2>
            <p>R$130,00</p>
          </div>
          <div>
            <img src="baw-modelo2.jpeg" alt="DAD HAT PATCH PLAID" />
            <h2>DAD HAT PATCH PLAID</h2>
            <p>R$90,00</p>
          </div>
          <div>
            <img src="baw-modelo3.jpeg" alt="CAMISA MANGA LONGA PLAID" />
            <h2>CAMISA MANGA LONGA PLAID</h2>
            <p>R$100,00</p>
          </div>
          <div>
            <img src="baw-modelo4.jpeg" alt="POCHETE PATCH PLAID" />
            <h2>POCHETE PATCH PLAID</h2>
            <p>R$130,00</p>
          </div>
          <div>
            <img src="baw-modelo5.jpeg" alt="CALÇA JEANS OVERSIZED CARGO" />
            <h2>CALÇA JEANS OVERSIZED CARGO</h2>
            <p>R$150,00</p>
          </div>
          <div>
            <img src="baw-modelo6.jpeg" alt="CAMISA SMASH BAW CREW" />
            <h2>CAMISA SMASH BAW CREW</h2>
            <p>R$80,00</p>
          </div>
          <div>
            <ProductList produtos={filteredProdutos} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Baw;
