// imports | favor nao cutucar
import express from 'express'
import cors from 'cors'
import mongoose, { MongooseError } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()


// express e cors uses | tambem não encosta krlh
const app = express()
app.use(express.json())
app.use(cors())


// mongodb - banquinho de dados || nao faço ideia de como usar ent to vendo video aula de um canal chamado victor lima - eita gloria
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost:27017/gamerBank").then(() => {
    console.log("conectado")
}).catch((err)=> {
    console.log("mal conexão: ", { err })
})

// tentando definir model

const UserSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    senha: {
        type: Number,
        require: true
    },
    pais: {
        type: String,
        require: true
    }
})

// tabelinha n chorax   x | tal da collectionsxxx
const User = mongoose.model('Users', UserSchema)

// new novoUser ({
//     nome: "edelcio",
//     email: "edelciomiguel@gmail.com",
//     senha: 142536,
//     pais: "Brasil"
// }).save().then(() => {console.log("carinha cadastrado aura")}).catch((err) => {console.log("deu pau ", { err })})   
/* porta || nao vou colocar 67*/
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


app.get('/Users',  async (req, res) => {
    try{
    const users = await User.find()
    res.json(users);
    
    }
     catch(err){
        res.status(418).json({mensagem:"erro"})
     }

})


// novo user
app.post('/cadastro', async (req, res) => {

    // _newUser.id = Users.length + 1
    // usercheck

    const userExistente = await User.findOne({
        email: req.body.email
    })
    if(userExistente){
        return res.status(409).json({mensagem:"usuario ja existe!"})
    }
    const _newUser = await User.create(req.body)
    const users = User.find()
    // Users.push(_newUser)
    res.status(418).json(users)
    
})

app.post('/login',  async (req, res) => {
    const _logUser = req.body;
    const mongoCheck = await User.findOne({
        email: _logUser.email,
        senha: _logUser.senha
    })
    // const userCheck = Users.find(user => user.email  === _logUser.email && user.senha === _logUser.senha)
    if(!mongoCheck){
       return  res.status(404).json({mensagem:"usuario inexistente"})
    }

    res.status(418).json({mensagem: "usuario logado com sucesso"})

})

//procurar user
app.get('/Users/seek', (req,res) => {
    const { id } = req.query

    const findUser = Users.find(user => user.id === Number(id))
    res.json(findUser || res.status(410).json({mensagem: `user id ${id} nao encontrado` }))
    
})
app.get('/Users/:id', async (req,res) => {
    const id = req.params.id
    const userID = await User.findById(id)
    // const findUser = Users.find(user => user.id === Number(id))
    // res.json(findUser || res.status(418).json({mensagem: `user id ${id} nao encontrado` }))
    res.status(418).json(userID)
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
