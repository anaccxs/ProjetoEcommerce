import React, { useState } from "react";
import styles from './filter.module.css'

const FilteredProdutoList = ({ produtos, onEdit, onDelete }) => {
  const [selectedBrand, setSelectedBrand] = useState("");

  const filteredProdutos = selectedBrand
    ? produtos.filter((produto) => produto.brand === selectedBrand)
    : produtos;

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.selectdiv}>
        <label>Filtrar </label>
        <select value={selectedBrand} onChange={handleBrandChange}>
          <option value="">Todos</option>
          <option value="Baw">Baw</option>
          <option value="Lacoste">Lacoste</option>
        </select>
      </div>

      <ul>
        {filteredProdutos.map((produto) => (
          <li key={produto.id} className={styles.produtoItem}>
            {/* Imagem do produto Não está aparecedo no front mas no server é salva normalmente na pasta uploads*/}
            <img 
              src={`/uploads/${produto.imageUrl}`} 
              alt={produto.name} 
              className={styles.produtoImage}
            />
            
            {/* Nome, preço e marca */}
            <div>
              <p><strong>Nome:</strong> {produto.name}</p>
              <p><strong>Preço: </strong> R${produto.price}</p>
              <p><strong>Marca:</strong> {produto.brand}</p>
            </div>

            {/* Botões de editar e excluir */}
            <button onClick={() => onEdit(produto)}>Editar</button>
            <button onClick={() => onDelete(produto.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredProdutoList;
