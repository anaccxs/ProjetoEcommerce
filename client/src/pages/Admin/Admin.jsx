import React, { useState, useEffect } from "react";
import styles from './admin.module.css'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import FilteredProdutoList from "../../components/FilteredProdutos/FilteredProdutos";
import AddProduto from "../../components/ProductAdd/ProductForm";
import EditProduto from "../../components/ProductEdit/ProductDetail";
import api from "../../service";

const Admin = () => {
  const [produtos, setProdutos] = useState([]);
  const [editingProduto, setEditProduto] = useState(null);

  useEffect(() => {
    loadProdutos();
  }, []);

  const loadProdutos = async () => {
    try {
      const response = await api.get("/produtos");
      setProdutos(response.data);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    }
  };

  const handleEdit = (produto) => {
    setEditProduto(produto);
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/produtos/${id}`);
      setProdutos((prevProdutos) =>
        prevProdutos.filter((produto) => produto.id !== id)
      );
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
    }
  };

  const handleProdutoAdded = (newProduto) => {
    setProdutos((prevProdutos) => [...prevProdutos, newProduto]);
  };

  const handleProdutoUpdated = async (updatedProduto) => {
    setProdutos((prevProdutos) =>
      prevProdutos.map((produto) =>
        produto.id === updatedProduto.id ? updatedProduto : produto
      )
    );
    await loadProdutos();  // Recarregar a lista de produtos
    setEditProduto(null);  // Fechar o modal de edição
  };  

  return (
    <div>
      <Header/>
      <div className={styles.container}>
        {editingProduto ? (
          <EditProduto
            produto={editingProduto}
            onProdutoUpdated={handleProdutoUpdated}
          />
        ) : (
          <AddProduto onProdutoAdd={handleProdutoAdded} />
        )}

        <FilteredProdutoList
          produtos={produtos}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
      <Footer/>
    </div>
  );
};

export default Admin;