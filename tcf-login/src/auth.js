export function getDataHoje() {
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const dia = String(hoje.getDate()).padStart(2, "0");
  return `${ano}-${mes}-${dia}`;
}

export async function sha256(texto) {
  const encoder = new TextEncoder();
  const dados = encoder.encode(texto);
  const hashBuffer = await crypto.subtle.digest("SHA-256", dados);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function gerarToken(usuario, privateKey, data) {
  return sha256(usuario + privateKey + data);
}

const NOME_COOKIE = "auth_session";

export function salvarSessaoNoCookie(usuario, token, data) {
  const sessao = JSON.stringify({ usuario, token, data });

  const meiaNoite = new Date();
  meiaNoite.setHours(23, 59, 59, 999);

  document.cookie =
    `${NOME_COOKIE}=${encodeURIComponent(sessao)}; ` +
    `expires=${meiaNoite.toUTCString()}; ` +
    `path=/; SameSite=Lax`;
}

export function lerSessaoDoCookie() {
  const cookies = document.cookie.split("; ");
  const encontrado = cookies.find((linha) => linha.startsWith(`${NOME_COOKIE}=`));

  if (!encontrado) return null;

  const valor = encontrado.split("=")[1];
  try {
    return JSON.parse(decodeURIComponent(valor));
  } catch {
    return null;
  }
}

export function apagarSessaoDoCookie() {
  document.cookie = `${NOME_COOKIE}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

export function getSessaoValidaDeHoje() {
  const sessao = lerSessaoDoCookie();
  if (!sessao) return null;
  if (sessao.data !== getDataHoje()) {
    apagarSessaoDoCookie();
    return null;
  }
  return sessao;
}