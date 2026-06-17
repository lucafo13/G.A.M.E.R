    import axios from "axios";

    const logar = async () => {
                        const email =  document.getElementById("input-emailog").value
        const senha = document.getElementById("input-passog").value

        try{

        const res = await axios.post('http://localhost:3000/login', {
            email,  
            senha
        })

        console.log(res)
        alert("user logado")

       
        }

        catch ( error ){
            console.log({error})
            alert("email ou senha incorretos")
        }
        email = ''
        senha = ''

    } 
    const cadog = document.getElementById("log-btnx")
    cadog.addEventListener('click', logar)

    const logg = document.getElementById('logg')
    logg.addEventListener('click', () => {window.location.href = './login.html'})