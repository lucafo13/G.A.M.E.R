import axios from "axios";
import  emailjs from '@emailjs/browser'

emailjs.init("5_JqmtV7HfHYu5zbd");

    const logar = async () => {

                        const email =  document.getElementById("input-emailog").value
        const senha = document.getElementById("input-passog").value
 // aqui
  try{

        const res = await axios.post("https://g-a-m-e-r.onrender.com/login", {
            email,  
            senha
        })

        //fecha aquy
        console.log(res.data)
        alert("user logado")

        const nomeU = localStorage.setItem("nome", res.data.nome)
        const emailU = localStorage.setItem('email', res.data.email)
        const senhaU = localStorage.setItem('senha', res.data.senha)
        const idU = localStorage.setItem('id', res.data.id)
        localStorage.setItem('foto', res.data.foto)
        await emailjs.send(
            'service_6vp4bi1', 'template_yze61ps',
            {
                nome: res.data.nome,
                email: res.data.email

            },
            "5_JqmtV7HfHYu5zbd"
        )

       window.location.href = '/index.html'
        }

        catch ( error ){
            // fehca aqui
            console.log({error})
            alert("email ou senha incorretos")
        }
   

    } 
    const cadog = document.getElementById("log-btnx")
    cadog.addEventListener('click', logar)

    const logg = document.getElementById('logg')
    logg.addEventListener('click', () => {window.location.href = '/login.html'})
