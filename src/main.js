import axios from "axios";



const App = async () => {
  const { data } = await axios.get("http://localhost:3000/Users")
  
}

const nome = document.getElementById("input-name").value
const email = document.getElementById("input-email").value
const senha = document.getElementById("input-pass").value
const pais = document.getElementById("input-pais").value

const cadastro = async () => {
  const cad = await axios.post("http://localhost:3000/Users", {
    nome,
    email,
    senha,
    pais,
  })
}