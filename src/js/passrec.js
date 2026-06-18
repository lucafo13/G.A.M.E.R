import axios from 'axios'


const passForget = async () => {
  try{
    const email = document.getElementById('input-emailRec').value.trim()
    const Nsenha = document.getElementById("input-passNew").value
    const confirmarSenha = document.getElementById("input-passConf").value

    if(Nsenha !== confirmarSenha){
      return alert("As senhas não coincidem, por favor tente novamente.")
    }

    const res = await axios.patch('http://localhost:3000/rec', {
      email,
      Nsenha
    })

    alert("senha atualizada")
    setTimeout(() => {
      window.location.href = '../loginn.html'
    }, 3000);

    
  }catch(err){
    alert('algo deu errado')
    console.log({ err })
}
}
const recBtn = document.getElementById('passBtn')
recBtn.addEventListener('click', passForget)