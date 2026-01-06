const USUARIO = "golden";
const CLAVE = "1234";

const loginBtn = document.getElementById("loginBtn");
const usuarioInput = document.getElementById("usuarioInput");
const claveInput = document.getElementById("claveInput");

const loginScreen = document.getElementById("loginScreen");
const mainScreen = document.getElementById("mainScreen");
const userLabel = document.getElementById("userLabel");

loginBtn.addEventListener("click", login);
usuarioInput.addEventListener("keyup", e => { if(e.key==="Enter") login(); });
claveInput.addEventListener("keyup", e => { if(e.key==="Enter") login(); });

function login() {
  const usuario = usuarioInput.value.trim();
  const clave = claveInput.value.trim();
  if(usuario===USUARIO && clave===CLAVE){
    loginScreen.style.display="none";
    mainScreen.style.display="block";
    userLabel.innerText="Usuario: "+usuario;
  } else alert("Usuario o clave incorrecta");
}

function salir(){
  mainScreen.style.display="none";
  loginScreen.style.display="block";
  usuarioInput.value="";
  claveInput.value="";
}
