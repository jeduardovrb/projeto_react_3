import './estilos.css';
import React, {useState} from 'react';
import Tamanho from './tamanho';
import Acesso from './acesso';

function App() {

  let [Status, setStatus] = useState({
    EstaDentro: false
  });

  return (
    <div className="content">
     
      {Status.EstaDentro ? 
       <div><Tamanho dica='digite seu nome'></Tamanho>
       </div> : 
       <div></div>}

      <div><Acesso avisarLogin={(novoValor) => setStatus({EstaDentro: novoValor})}></Acesso></div> 
    </div>
  );
}

export default App;
