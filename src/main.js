
const select = document.getElementById("option")
const paises = [
  "Afeganistão",
  "África do Sul",
  "Alemanha",
  "Angola",
  "Arábia Saudita",
  "Argélia",
  "Argentina",
  "Austrália",
  "Áustria",
  "Bélgica",
  "Bolívia",
  "Brasil",
  "Canadá",
  "Catar",
  "Chile",
  "China",
  "Colômbia",
  "Coreia do Sul",
  "Costa Rica",
  "Croácia",
  "Cuba",
  "Dinamarca",
  "Egito",
  "Emirados Árabes Unidos",
  "Equador",
  "Espanha",
  "Estados Unidos",
  "França",
  "Grécia",
  "Holanda",
  "Índia",
  "Indonésia",
  "Irlanda",
  "Itália",
  "Jamaica",
  "Japão",
  "Marrocos",
  "México",
  "Moçambique",
  "Nigéria",
  "Noruega",
  "Nova Zelândia",
  "Peru",
  "Polônia",
  "Portugal",
  "Reino Unido",
  "Rússia",
  "Suécia",
  "Suíça",
  "Uruguai"
] 

const options = paises.map(pais => `<option value="${pais}">${pais}</option>`).join('')
select.innerHTML += options

const log = document.getElementById("log")
const passForget = document.querySelector(".passForget")
log.addEventListener("click", () => {
  
    window.location.href = "loginn.html"
})
passForget.addEventListener("click", () => {
    window.location.href = "/passForget.html"
})