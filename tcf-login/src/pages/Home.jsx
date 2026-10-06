
import { apagarSessaoDoCookie } from "../auth.js";
import '../Home.css';
import { useState } from "react";
import Inputss from "../component/inputss.jsx"

export default function Home({ sessao, onLogout }) {
  function handleLogout() {
    apagarSessaoDoCookie();
    onLogout();
  }

 const calcularr = () => {
    if (valors1 > 8475) {
      const porcentagem = valors1 * 0.18;
      const novoValor = valors1 - porcentagem;
      setResultado(novoValor);
    }
      else if( valors1 <= 8475 && valors1 >= 4354 ) {
      const porcentagem = valors1 * 0.14;
      const novoValor = valors1 - porcentagem;
      setResultado(novoValor);
    } else if ( valors1 < 4354 && valors1 >= 2900) {
      const porcentagem = valors1 * 0.12;
      const novoValor = valors1 - porcentagem;
      setResultado(novoValor);
    } else if ( valors1 < 2900 && valors1 >=1621) {
      const porcentagem = valors1 * 0.09;
      const novoValor = valors1 - porcentagem;
      setResultado(novoValor);
    } else if (valors1 <1621) {
      const porcentagem = valors1 * 0.075;
      const novoValor = valors1 - porcentagem;
      setResultado(novoValor);
    }

  };

  const [valors1, setValors1] = useState()
  const [resultado, setResultado] = useState(0)

  return (
    <div className="container">    
      <div>
        <div className="barra">
          <p className="texto">olá seja bem-vindo</p>
          
        </div>
        <div>
          <button className="butao" onClick={handleLogout}>Sair</button>
        </div>
        <div className="containerr">
          <div className="calculo">
            <div className="inputEBotao">
              <Inputss  value={valors1} onchange={setValors1} />
              <button className="botao" onClick={calcularr}>calcular</button>
            </div> 
            <div><p className="resultado">seu salario sera de: {resultado}</p></div>
            
          </div>
        </div>

        
      </div>
    </div>
  );
}