import axios from "axios";

const nome = document.getElementById('namep');
const email = document.getElementById('email')
const senha = document.getElementById('pass')
nome.textContent = ` ${localStorage.getItem('nome')}`
email.textContent = `${localStorage.getItem('email')}`
senha.textContent = localStorage.getItem('senha')
const pegafoto = document.getElementById('getfoto')
const pfp = document.getElementById('fotoatu')


pegafoto.addEventListener('change', async () => {

    const arquivo = pegafoto.files[0]   
    if(!arquivo){
        return ;
    }
    const form = new FormData   
    form.append('foto', arquivo)
    const res = await axios.post(`https://g-a-m-e-r.onrender.com/perfil/${localStorage.getItem('id')}`, form)
    console.log(res.data)

    pfp.src = res.data.foto
}) 


if(localStorage.getItem('foto')){
    pfp.src = localStorage.getItem('foto')
}