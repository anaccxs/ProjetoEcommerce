// src/pages/Perfil/Profile.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from './profile.module.css'; 
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        // Redirecionar para a página de login se não houver token
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error('Erro ao buscar os dados do usuário:', error);
        setError('Erro ao carregar dados do usuário. Você pode precisar fazer login novamente.');
        // Se o token for inválido, redirecionar para o login
        if (error.response?.status === 401) {
          navigate('/login');
        }
      }
    };

    fetchUser();
  }, [navigate]);

  return (
    <div className={styles.maindiv}>
      {/* Renderizar se o usuário for admin */}
      <header>
        <Header />
      </header>
      <section>        
        {user?.role === 'admin' && <Link to="/admin">PÁGINA ADMIN</Link>} 
        <h1>Perfil do Usuário</h1>
        {error && <p>{error}</p>} {/* Exibir mensagem de erro, se houver */}
        {user ? (
          <div>
            <p>Nome: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Tipo de Usuário: {user.role}</p> {/* Exibir o papel do usuário */}
          </div>
        ) : (
          <p>Carregando dados do usuário...</p>
        )}
      </section>
      <Footer/>
    </div>
  );
};

export default Profile;
