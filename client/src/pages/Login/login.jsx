// src/pages/Login/login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './login.module.css';  // Importa o CSS Module
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Fazer login
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });

      const { token, role } = response.data;

      // Armazenar o token no localStorage
      localStorage.setItem('token', token);

      // Redirecionar com base no papel do usuário (role)
      if (role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/profile');
      }
    } catch (error) {
      setError(error.response?.data?.error || 'Erro ao fazer login');
    }
  };

  return (
    <div>
      <header>
        <Header />
      </header>

      <section className={styles.mainsec}>
        <section className={styles.section1}>
          <h2>Login</h2>

          <form className={styles.form2} onSubmit={handleLogin}>
            <div className={styles.dois}>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.dois}>
              <label>Senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p>{error}</p>}
            <button type="submit" className={styles.btn}>Entrar</button>
          </form>

          <Link className={styles.linkcadastro} to="/register">Não possui uma conta? - Cadastre-se</Link>
        </section>
      </section>

      <Footer />
    </div>
  );
};

export default Login;
