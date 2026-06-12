import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`)
})

let Users = [{
    email: "teste@gmail.com", senha: 1234 
},
    {email: "odavilucas587@gmail.com", senha: 4321},
    {email: "bandidoquer67resenha@gmail.com", senha: 5423}
]

app.get('/Users', (req, res) => {
    res.json(Users);
})

app.post('/Users', (req, res) => {
    req
})