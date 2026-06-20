emailjs.init("5_JqmtV7HfHYu5zbd");


const login = document.querySelector('#login');

login.addEventListener('click', () => {
    setTimeout(() => {
        window.location.href = 'src/loginn.html';
    }, 1000);
})
const nome = localStorage.getItem("nome")

if(!nome){
    document.getElementById('name').textContent = "Fazer Login"
} else{
document.getElementById('name').textContent = nome
}

// effect

