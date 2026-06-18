emailjs.init("5_JqmtV7HfHYu5zbd");


const login = document.querySelector('#login');

login.addEventListener('click', () => {
    settimeout(() => {
        window.location.href = 'login.html';
    }, 1000);
})