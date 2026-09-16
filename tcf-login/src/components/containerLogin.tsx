import { useState } from 'react';

export default function containerLogin() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    function entrar (){
        alert(`Usuario=${usuario}
            senha=${senha}
            `)
    }

    return(
        <>
            <label htmlFor="Usuario">Usuario:</label>
            <input id='Usuario' onChange={((e) =>setUsuario(e.target.value))}></input>
            <br />
            <label htmlFor="Senha"></label>
            <input id="Senha" type="password" onChange={((e) => setSenha(e.target.value))}>Senha: </input>
            <br />
            <br />
            <button onClick={entrar}>Entrar</button>
        </>
    )
}