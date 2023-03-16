import React from 'react';
import './styles.css';
import Logo from '../../assets/images/quiz.png';


function Home() {
  return (
    <div className='container'>
        <h1 className='title'>Bem-Vindo ao </h1>
 <img src={Logo} alt='Logo' className='logo' />
        <small className='description'> Teste seus conhecimentos sobre React</small>

          <button className='button-start'>🚀Começar</button>
          <footer className='footer'>
            <span className=' author'>Criado por <a href = "https://github.com/ph10gomes" target="_blank" rel= "noreferrer" className='author'>Pedro Bittencourt🍺</a></span>  
          </footer>


    </div>
  )

}

export default Home;