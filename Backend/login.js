// imports | favor nao cutucar
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'


// express e cors uses | tambem não encosta krlh
const app = express()
app.use(express.json())
app.use(cors())


/* porta */
const PORT = 3000

/* codigo em si */
app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`)
})

let Users = [{
    id:1,
    email: "teste@gmail.com", senha: 1234   },
    {id:2,email: "odavilucas587@gmail.com", senha: 4321},
    {id:3,email: "bandidoquer67resenha@gmail.com", senha: 5423}
]


app.get('/Users', (req, res) => {
    res.json(Users);
})


// novo user
app.post('/cadastro', (req, res) => {
    const _newUser = req.body
    _newUser.id = Users.length + 1
    // usercheck

    const userExistente = Users.find(user => user.email === _newUser.email)
    if(userExistente){
        return res.status(409).json({mensagem:"usuario ja existe!"})
    }
    Users.push(_newUser)
    res.status(418).json(Users)
    
})

//procurar user
app.get('/Users/seek', (req,res) => {
    const { id } = req.query

    const findUser = Users.find(user => user.id === Number(id))
    res.json(findUser || res.status(410).json({mensagem: `user id ${id} nao encontrado` }))
    
})
app.get('/Users/:id', (req,res) => {
    const id = req.params.id

    const findUser = Users.find(user => user.id === Number(id))
    res.json(findUser || res.status(418).json({mensagem: `user id ${id} nao encontrado` }))
    
})

app.patch('/Users/:id', (req,res) => {
    const id = req.params.id;

    const userReal = Users.find(user => user.id === Number(id));
    if(!userReal){
        return res.send('user inexistente')
    }

    const findEmail = Users.findIndex(user => user.id ===Number(id))
    const novoEmail = {
        ...userReal,
        ...req.body
    }

    Users[findEmail] = novoEmail
    res.status(418).json(novoEmail)
})  

app.delete('/Users/:id', (req, res) => {
    const id = req.params.id

    const userReal = Users.find(user => user.id === Number(id))

    if(!userReal){
        return res.status(404).json({mensagem:"usuario inexistente"})
    }

    Users = Users.filter(user => user.id !== Number(id))
    res.status(418).json(Users)
})