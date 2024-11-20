// src/pages/Cadastro/cadastro.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './cadastro.module.css';  // Importa o CSS Module
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [role, setRole] = useState('user'); // Definindo um valor padrão
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', {
        username,
        email,
        password,
        role
      });
      navigate('/login');
    } catch (error) {
      setError(error.response?.data?.error || 'Erro ao cadastrar');
    }
  };

  return (
    <div>
      <header>
        <Header />
      </header>

      <section className={styles.mainsec}>
        <section className={styles.section1}>
          <h2>Cadastrar</h2>

          <form className={styles.form2} onSubmit={handleRegister}>
            <div className={styles.dois}>
              <label className={styles.lbl1}>Nome de Usuário</label>
              <input
                type="text"
                value={username}
                className={styles.txtnome}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className={styles.dois}>
              <label className={styles.lbl1}>Email</label>
              <input
                type="email"
                value={email}
                className={styles.txtnome}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.dois}>
              <label className={styles.lbl1}>Senha</label>
              <input
                type="password"
                value={password}
                className={styles.txtnome}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>            
            <div className={styles.dois}>
              <label className={styles.lbl1}>Role</label>
              <select value={role} className={styles.txtnome} onChange={(e) => setRole(e.target.value)}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            {error && <p>{error}</p>}
            <button type="submit" className={styles.btn}>Cadastrar</button>
          </form>
        </section>
        <Link className={styles.linklogin} to={"/login"}>Já possui uma conta?</Link>
      </section>

      <Footer />
    </div>
  );
};

export default Cadastro;
