
const login = document.querySelector('#login');

login.addEventListener('click', () => {
    setTimeout(() => {
        window.location.href = '/loginn.html';
    }, 1000);
})
const nome = localStorage.getItem("nome")

if(!nome){
    document.getElementById('name').textContent = "Fazer Login"
} else{
document.getElementById('name').textContent = nome
}

const irAnalises = document.getElementById('analises')
irAnalises.addEventListener('click', () => {
    if(!localStorage.getItem('nome')){
        alert('Faça Login primeiro')
    } 
    window.location.href = '/analises.html'
    
})
// effect

