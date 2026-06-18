import axios from 'axios';


const cadastro = async () => {
  try{  
    const nome = document.getElementById("input-name").value
    const email = document.getElementById("input-email").value
    const senha = document.getElementById("input-pass").value
    const pais = document.getElementById("option").value

    const cad = await axios.post("http://localhost:3000/cadastro", {
    nome,
    email,
    senha,
    pais,
    
  })
    console.log("cadastro feito pabens", cad.data)
    alert("cadastro concluido!!!")
    setTimeout(() => {    
          window.location.href = "loginn.html"
    }, 2000)
  }
  catch( error ){
    console.log(`Erro no axios caraio: ${error}`)
  }
}
const cadbtn = document.getElementById("cad")
cadbtn.addEventListener("click", cadastro)
