import axios from "axios";

const nome = document.getElementById('namep');
const email = document.getElementById('email')
const senha = document.getElementById('pass')
nome.textContent = ` ${localStorage.getItem('nome')}`
email.textContent = `${localStorage.getItem('email')}`
const pegafoto = document.getElementById('getfoto')

if(localStorage.getItem('foto')){
    pfp.src = localStorage.getItem('foto')
}


pegafoto.addEventListener('change', async () => {

    const arquivo = pegafoto.files[0]   
    if(!arquivo){
        return ;
    }
    const form = new FormData   
    form.append('foto', arquivo)
    const res = await axios.post(`https://g-a-m-e-r.onrender.com/perfil/${localStorage.getItem('idU')}`, form)
    localStorage.setItem('foto',res.data.foto)
    pfp.src = localStorage.getItem('foto')
}) 


if(localStorage.getItem('foto')){
    pfp.src = localStorage.getItem('foto')
}