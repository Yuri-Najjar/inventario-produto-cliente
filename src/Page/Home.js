import React from 'react';
import homeStyles from '../Styles/StyleHome.css';
import logo from './logo.png';
import icone1 from './icone1.png';
import icone2 from './icone2.png';
import {NavLink} from 'react-router-dom';


const Home = () => {
    const { tudo } = homeStyles;
  return (
    <section id="background" className={tudo}>
    <div className='logo'>
        <img src={logo} alt="logotipo"/>
    </div>
     <div className="vantagens">
     <div>
         <NavLink to="/cliente"><img src={icone1} alt="Clientes"/></NavLink>
         <p>Cadastro de Clientes</p>
     </div>
     <div>
     <NavLink to="/produto"><img src={icone2} alt="Produtos"/></NavLink>
         <p>Cadastro de Produtos</p>
     </div>
 </div>
 <div className="bottom">
 </div>
 </section>
  );
}

export default Home;