const nome = localStorage.getItem("nome");
const nameElement = document.getElementById("nameH1");
nameElement.textContent =  `Bem-vindo, ${nome}!`;

const perfil = document.getElementById('name')
perfil.textContent = nome;