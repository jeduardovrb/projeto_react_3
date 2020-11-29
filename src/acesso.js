import React, {useState} from 'react';

const Acesso = props => {

  const imagens = ["reprovado.jpg", "aprovado.png"];
  const botao_txt  = ["Login", "Logout"];

  let [texto, setTexto] = useState({
    acesso: false
  });
  
  function chamarOnClick(pAcesso) {
    setTexto({
      acesso: pAcesso
    });

    props.Login(pAcesso);
  }

  return(
    <div>
      <img className="imagem" src={imagens[texto.acesso ? 1 : 0]}  alt="trabalho web">
      </img>
      <p>
        <button onClick={() => chamarOnClick(!texto.acesso)}>
          {botao_txt[texto.acesso ? 1 : 0]}
        </button>
      </p>
    </div>
  );
}

export default Acesso;