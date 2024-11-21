import React, { useState, useEffect } from 'react'; 
import styles from './Lacoste.module.css';  // Importando o CSS Module
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import ProductList from '../../components/ProductList/ProductList';  // Importando o componente que exibe os produtos
import api from '../../service';  // Se você estiver fazendo requisições à API para carregar os produtos

const Lacoste = () => {
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

  // Filtrando os produtos pela marca 'Lacoste'
  const filteredProdutos = produtos.filter(produto => produto.brand === 'Lacoste');
  return (
    <div>
      <header>
        <Header />
      </header>

      <section className={styles.section1}>
        <h1>LACOSTE</h1>
        <h3>Polos e Mais</h3>
        <div className={styles.fotos}>
          <div>
            <img src="lacoste-modelo1.jpeg" alt="Modelo 1" />
            <h2>POLO L.12.12 MANGA LONGA</h2>
            <p>R$100,00</p>
          </div>
          <div>
            <img src="lacoste-modelo2.jpeg" alt="Modelo 2" />
            <h2>POLO CROPPED FEMININA</h2>
            <p>R$140,00</p>
          </div>
          <div>
            <img src="lacoste-modelo3.jpeg" alt="Modelo 3" />
            <h2>POLO INFANTIL</h2>
            <p>R$130,00</p>
          </div>
          <div>
            <img src="lacoste-modelo4.jpeg" alt="Modelo 4" />
            <h2>BOBOJACO FEMININO</h2>
            <p>R$200,00</p>
          </div>
          <div>
            <img src="lacoste-modelo5.jpeg" alt="Modelo 5" />
            <h2>SHORT MASCULINO</h2>
            <p>R$170,00</p>
          </div>
          <div>
            <img src="lacoste-modelo6.jpeg" alt="Modelo 6" />
            <h2>CORTA VENTO FEMININO</h2>
            <p>R$200,00</p>
          </div>
          <div>
            <ProductList produtos={filteredProdutos} />
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
