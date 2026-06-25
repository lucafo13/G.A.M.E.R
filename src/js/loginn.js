import axios from "axios";
import  emailjs from '@emailjs/browser'

emailjs.init("5_JqmtV7HfHYu5zbd");

    const logar = async () => {
        const btn = document.getElementById("log-btnx");
                        const email =  document.getElementById("input-emailog").value
        const senha = document.getElementById("input-passog").value

        btn.disabled = true;
    btn.classList.add("loading");
    const textoOriginal = btn.innerText;
    btn.innerText = "Aguardando...";


        try{

        const res = await axios.post("https://g-a-m-e-r.onrender.com/login", {
            email,  
            senha
        })

        console.log(res.data)
        alert("user logado")

        const nomeU = localStorage.setItem("nome", res.data.nome)
        const emailU = localStorage.setItem('email', res.data.email)
        await emailjs.send(
            'service_6vp4bi1', 'template_yze61ps',
            {
                nome: res.data.nome,
                email: res.data.email

            },
            "5_JqmtV7HfHYu5zbd"
        )
 window.location.href = '/index.html';
    } catch (error) {
        console.log({ error });
        alert("E-mail ou senha incorretos");
        btn.disabled = false;
        btn.classList.remove("loading");
        btn.innerText = textoOriginal;
    }
};

document.getElementById("log-btnx").addEventListener('click', logar);
document.getElementById('logg').addEventListener('click', () => { window.location.href = '/login.html'; });