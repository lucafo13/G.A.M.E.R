import axios from "axios";

// const nome = document.getElementById('namep');
// const email = document.getElementById('email')
// const senha = document.getElementById('pass')
// nome.textContent = ` ${localStorage.getItem('nome')}`
// email.textContent = `${localStorage.getItem('email')}`
// senha.textContent = localStorage.getItem('senha')
const pegafoto = document.getElementById('getfoto')
const pfp = document.getElementById('fotoatu')
const bio = document.getElementById('bio')
const classN = document.querySelectorAll('.namep')
const classE = document.querySelectorAll('.email')
const classS = document.querySelectorAll('.senha')
const pais = document.getElementById('pais')

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
        localStorage.setItem('descricao', res.data.userMail.descricao)
        bio.textContent = res.data.userMail.descricao
        pais.innerHTML = `<i class="bi bi-globe"></i> ${res.data.userMail.pais}`
        classN.forEach((name)=>{name.textContent = res.data.userMail.nome})
        classE.forEach(email => {email.textContent = res.data.userMail.email});
        classS.forEach(element => {element.textContent = res.data.userMail.senha});
        
    }
    catch(err){
        console.log(err)
    }
}
foto()




// bagui da descricao


const salva = document.getElementById('salva')
const novaBIoRes = async () => {
    try {
        const nNome = document.getElementById('novoNome').value
        const nEmail = document.getElementById('novoEmail').value
        const nSenha = document.getElementById('novaSenha').value
        const Des = document.getElementById('novaBio').value

        if(Des){
            const res = await axios?.post(`https://g-a-m-e-r.onrender.com/des/${localStorage.getItem('id')}`, {Des: Des})
        }
        if(nNome){
            const resNome = await axios?.patch(`https://g-a-m-e-r.onrender.com/nome/${localStorage.getItem('id')}`, {nName: nNome})
        }
        if(nEmail){
            const resEmail = await axios?.patch(`https://g-a-m-e-r.onrender.com/email/${localStorage.getItem('id')}`, {nEmail: nEmail})
        }
        if(nSenha){
             const resSenha = await axios?.patch(`https://g-a-m-e-r.onrender.com/senha/${localStorage.getItem('id')}`, {nSenha: nSenha})
        }

        
        await foto()
        

    } catch (error) {
        console.log(error)
    }
}
salva.addEventListener('click', novaBIoRes)
bio.textContent = localStorage.getItem('descricao')