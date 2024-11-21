import React, { useState, useEffect } from "react";
import api from "../../service/index";
import styles from './edit.module.css';

const EditProduto = ({ produto, onProdutoUpdated }) => {
  const [name, setName] = useState(produto.name);
  const [price, setPrice] = useState(produto.price);
  const [brand, setBrand] = useState(produto.brand);
  const [imageUrl, setImageUrl] = useState(produto.imageUrl); // Carrega a URL da imagem existente

  useEffect(() => {
    setName(produto.name);
    setPrice(produto.price);
    setBrand(produto.brand);
    setImageUrl(produto.imageUrl); // Atualiza a imagem se necessário
  }, [produto]);

  const handleUpdateProduto = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put(`/produtos/${produto.id}`, {
        name,
        price,
        brand,
        imageUrl, // A URL da imagem que o usuário forneceu ou editou
      });
      onProdutoUpdated(response.data);
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Editar Produto</h2>
      <form onSubmit={handleUpdateProduto}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <select
          name="brand"
          id="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          required
        >
          <option value="" disabled>
            Selecione uma Marca
          </option>
          <option value="Baw">Baw</option>
          <option value="Lacoste">Lacoste</option>
        </select>
        
        {/* Campo para editar a URL da Imagem */}
        <input
          type="text"
          placeholder="URL da Imagem"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
};

export default EditProduto;
