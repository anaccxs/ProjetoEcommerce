import React from "react";
import styles from './list.module.css';

const ProductList = ({ produtos }) => {
  return (
    <div className={styles.fotos}>    
        {produtos.map((produto) => (
          <div key={produto.id} >
            {produto.imageUrl && (
              <img
                src={produto.imageUrl}
                alt={produto.name}
              />
            )}
              <h2>{produto.name}</h2>
              <p>R$ {produto.price}</p>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
