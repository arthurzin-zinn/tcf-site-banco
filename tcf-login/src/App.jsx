
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSessaoValidaDeHoje } from "./auth.js";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import teste from "./pages/Teste.jsx";

export default function App() {
  const [sessao, setSessao] = useState(undefined);

  useEffect(() => {
    async function checarSessao() {
      
      const sessaoValida = await getSessaoValidaDeHoje();
      setSessao(sessaoValida)
    }
    checarSessao()
  }, []);

  if (sessao === undefined) {
    return <p>Carregando...</p>;
  }
console.log(sessao)
  if (!sessao) {
    return <Login onLoginSucesso={(novaSessao) => setSessao(novaSessao)} />;
  }

  return( <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home sessao={sessao} onLogout={() => setSessao(null)} />} />
    <Route path="/teste" element={<teste />} />
   </Routes>
  </BrowserRouter>
  )

}