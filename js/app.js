// LOGIN
const loginPanel = document.getElementById("loginPanel");
const mainContainer = document.getElementById("mainContainer");
const loginBtn = document.getElementById("loginBtn");
const loginError = document.getElementById("loginError");
const usuarioInput = document.getElementById("usuario");
const passwordInput = document.getElementById("password");

// Usuario hardcode
const USUARIO = "admin";
const PASSWORD = "1234";

loginBtn.addEventListener("click", () => {
  const usuario = usuarioInput.value;
  const password = passwordInput.value;

  if(usuario === USUARIO && password === PASSWORD){
    loginPanel.style.display = "none";
    mainContainer.style.display = "flex";
    loginError.style.display = "none";
  } else {
    loginError.style.display = "block";
  }
});

// Modificar botón salir para volver al login
logoutBtn.addEventListener("click", () => {
  mainContainer.style.display = "none";
  loginPanel.style.display = "block";
  usuarioInput.value = "";
  passwordInput.value = "";
});
