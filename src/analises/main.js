const nome = localStorage.getItem("nome");
const nameElement = document.getElementById("nameH1");
nameElement.textContent =  `Bem-vindo, ${nome}!`;

const perfil = document.getElementById('name')
perfil.textContent = nome;

const nome = localStorage.getItem("nome")

if(!nome){
    document.getElementById('name').textContent = "Fazer Login"
    document.getElementById('name').addEventListener('click', () => {window.location.href = '/loginn.html';})
} else{
document.getElementById('name').textContent = nome
}
