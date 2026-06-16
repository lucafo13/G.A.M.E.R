import axios from "axios";



const App = async () => {
  const { data } = await axios.get("http://localhost:3000/Users")
  
}
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

paises.forEach(pais => {
  select.innerHTML += `<option value="${pais}">${pais}</option>`
});

const nome = document.getElementById("input-name").value
const email = document.getElementById("input-email").value
const senha = document.getElementById("input-pass").value
const pais = document.getElementById("input-pais").value

const cadastro = async () => {
  try{  const cad = await axios.post("http://localhost:3000/cadastro", {
    nome,
    email,
    senha,
    pais,
    
  })
    console.log("cadastro feito pabens", cad.data)
    alert("cadastro concluido!!!")
  }
  catch( error ){
    console.log(`Erro no axios caraio: ${error}`)
  }
}