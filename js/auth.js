var authLogin = document.getElementsByClassName("auth-login");
var authRegister = document.getElementsByClassName("auth-register");
var authMark = document.getElementsByClassName("auth-mask");
var authCard = document.getElementsByClassName("auth-card");

var authClose = document.getElementById("auth_close");
var redirectLogin = document.getElementById("redirect_login");
var redirectRegister = document.getElementById("redirect_register");
var login = document.getElementById("login");

login.onclick = () => {
  authMark[0].classList.remove("none");
  authCard[0].classList.add("animation-auth");
};

authClose.onclick = () => {
  authMark[0].classList.add("none");
  authCard[0].classList.remove("animation-auth");
};

redirectLogin.onclick = () => {
  authRegister[0].classList.add("none");
  authLogin[0].classList.remove("none");
};

redirectRegister.onclick = () => {
  authRegister[0].classList.remove("none");
  authLogin[0].classList.add("none");
};
