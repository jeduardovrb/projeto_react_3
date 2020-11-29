import './estilos.css';
import React, {useState} from 'react';
import Tamanho from './tamanho';
import Acesso from './acesso';

function App() {

  let [login, setLogin] = useState({
    Logado: false
  });

  return (
    <div className="content">
     
      {login.Logado ? 
       <div><Tamanho dica='digite seu nome'></Tamanho>
       </div> : 
       <div></div>}

      <div><Acesso Login={(pValor) => setLogin({Logado: pValor})}></Acesso></div> 
    </div>
  );
}

export default App;
