// src/components/ProductAdd/ProductForm.jsx
import React, { useState } from "react";
import api from "../../service/index";
import styles from './add.module.css';

const AddProduto = ({ onProdutoAdd }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState(null); // Alteração aqui para lidar com o arquivo de imagem

  const handleAddProduto = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("brand", brand);

    // Adiciona o arquivo de imagem ao FormData
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await api.post("/produtos", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      onProdutoAdd(response.data);
      setName("");
      setPrice("");
      setBrand("");
      setImage(null); // Limpar o arquivo de imagem
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Adicionar Produto</h2>
      <form onSubmit={handleAddProduto}>
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

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
        />

        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AddProduto;
