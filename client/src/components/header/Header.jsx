import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
    return (
      <div className={styles.topicos}>
          <h3 className={styles.logo}>Ousadia</h3>
          <ul className={styles.navUl}>
            <li><Link className={styles.navItem} to="/">Home</Link></li>
            <li><Link className={styles.navItem} to="/produtos">Produtos</Link></li>
            <li><Link className={styles.navItem} to="/contato">Contato</Link></li>
            <li><Link className={styles.navItem} to="/register">Cadastro</Link></li>
          </ul>

          <div className={styles.icones}>
            <div className={styles.search}>
                <input type="search" 
                placeholder='Procure um item :)'/>
                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512" className={styles.svgSearch}>
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                </svg>
            </div>

            <Link to="/cart" className={styles.btnCart}>
              <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 576 512" className={styles.svgCart}>
                <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
              </svg>
              <div className={styles.quantProdutos}>
                <span>0</span>
              </div>
            </Link>
            <Link to="/profile">
              <svg xmlns="http://www.w3.org/2000/svg" height='2em' viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
            </Link>
          </div>

          {/* <button className={styles.menuBars}>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className={styles.svgBars}>
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
          </svg>
          </button> */}

        </div>
    );
}

/*<div>
    <div className={styles.searchInput}>
      <input type="search" />
      --- <FontAwesomeIcon icon={faSearch}/> ---
    </div>
    <button className='btnCart'>
      Carrinho
    </button>
  </div>*/

export default Header;