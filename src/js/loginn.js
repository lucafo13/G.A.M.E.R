    import axios from "axios";

    const logar = async () => {
                        const email =  document.getElementById("input-emailog").value
        const senha = document.getElementById("input-passog").value

        try{

        const res = await axios.post('http://localhost:3000/login', {
            email,  
            senha
        })

        console.log(res.data)
        alert("user logado")

        const nome = localStorage.setItem("nome", res.data.nome)

       window.location.href = '../index.html'
        }

        catch ( error ){
            console.log({error})
            alert("email ou senha incorretos")
        }
   

    } 
    const cadog = document.getElementById("log-btnx")
    cadog.addEventListener('click', logar)

    const logg = document.getElementById('logg')
    logg.addEventListener('click', () => {window.location.href = './login.html'})