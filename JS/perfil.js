import axios from "axios";

const nome = document.getElementById('namep');
const email = document.getElementById('email')
const senha = document.getElementById('pass')
nome.textContent = ` ${localStorage.getItem('nome')}`
email.textContent = `${localStorage.getItem('email')}`
senha.textContent = localStorage.getItem('senha')
const pegafoto = document.getElementById('getfoto')
const pfp = document.getElementById('fotoatu')

const classN = document.querySelectorAll('.namep')
const classE = document.querySelectorAll('.email')
const classS = document.querySelectorAll('.senha')

classN.forEach((name)=>{name.textContent = localStorage.getItem('nome')})
classE.forEach(email => {
    email.textContent = localStorage.getItem('email')
});
classS.forEach(element => {
    element.textContent = localStorage.getItem('senha')
});
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
const foto = async () => {
    try{
        const res = await axios.get(`https://g-a-m-e-r.onrender.com/Users/${localStorage.getItem('email')}`)
        console.log(res.data)
        pfp.src = res.data.userMail.foto
    }
    catch(err){
        alert('ai meu cuzinhooo')
    }
}
foto()