import React, {useState} from 'react';
import './estilos.css';

const Tamanho = props => {

  let [texto, setTexto] = useState({
    descricao: '',
    tamanho: 0
  });

  function editOnChange(event) {
    setTexto({
      descricao: '',
      tamanho: event.target.value.length
    });
  }

  return(
    <div className="content">
      <input 
        type="text" onChange={event => editOnChange(event)}>
      </input>

      <p>
        Este texto contém {texto.tamanho} caracteres.
      </p>
    </div>
  );
}

export default Tamanho;