
import { BrowserRouter, Routes, Route } from "react-dom";
import { useEffect, useState } from "react";
import { getSessaoValidaDeHoje } from "./auth.js";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";

export default function App() {
  const [sessao, setSessao] = useState(undefined);

  useEffect(() => {
    setSessao(getSessaoValidaDeHoje());
  }, []);

  if (sessao === undefined) {
    return <p>Carregando...</p>;
  }

  if (!sessao) {
    return <Login onLoginSucesso={(novaSessao) => setSessao(novaSessao)} />;
  }

  return <Home sessao={sessao} onLogout={() => setSessao(null)} />
}