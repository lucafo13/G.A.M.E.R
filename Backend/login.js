// imports | favor nao cutucar
import express from 'express'
import cors from 'cors'
import mongoose, { MongooseError } from 'mongoose'
import dotenv from 'dotenv'
import cron from 'cron'

dotenv.config()


// express e cors uses | tambem não encosta krlh
const app = express()
app.use(express.json())
app.use(cors())



// mongodb - banquinho de dados || nao faço ideia de como usar ent to vendo video aula de um canal chamado victor lima - eita gloria
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO).then(() => {
    console.log("conectado")
}).catch((err)=> {
    console.log("mal conexão: ", { err })
})

// tentando definir model

const UserSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },  
    senha: {
        type: String,
        required: true
    },
    pais: {
        type: String,
        required: true
    }
})


// tabelinha n chorax   x | tal da collectionsxxx
const User = mongoose.model('Users', UserSchema)

const PORT = process.env.API

/* codigo em si */
app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`)
})

// let Users = [{
//     id:1,
//     email: "teste@gmail.com", senha: 1234   },
//     {id:2,email: "odavilucas587@gmail.com", senha: 4321},
//     {id:3,email: "bandidoquer67resenha@gmail.com", senha: 5423}
// ]


app.get('/Users',  async (req, res) => {
    try{
    const users = await User.find()
    res.json(users);
    
    }
     catch(err){
        res.status(418).json({mensagem:"erro"})
     }

})
app.get('/Users/:email', async (req, res) => {
    try{
        const emailUser = req.params.email

        const userMail = await User.findOne({
            email: emailUser
        })

        if(!userMail){
            res.status(404).json({ mensagem: "não encontrado!"})
        }

        res.json({userMail})
    }
    catch(err){

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
    const _newUser = await User.create(req.body);
    const users = await User.find()
    // Users.push(_newUser)
    res.status(201).json(users)
    
})

app.post('/login',  async (req, res) => {
    const { email, senha } = req.body;
    const mongoCheck = await User.findOne({
        email,
        senha
    })
    // const userCheck = Users.find(user => user.email  === _logUser.email && user.senha === _logUser.senha)
    if(!mongoCheck){
       return  res.status(404).json({mensagem:"usuario inexistente"})
    }

    res.status(200).json({mensagem: "usuario logado com sucesso", nome: mongoCheck.nome, email: mongoCheck.email, senha: mongoCheck.senha})


})

//procurar user
// app.get('/Users/seek', (req,res) => {
//     const { id } = req.query

//     const findUser = Users.find(user => user.id === Number(id))
//     res.json(findUser || res.status(410).json({mensagem: `user id ${id} nao encontrado` }))
    
// })
// app.get('/Users/:id', async (req,res) => {
//     const id = req.params.id
//     const userID = await User.findById(id)
//     // const findUser = Users.find(user => user.id === Number(id))
//     // res.json(findUser || res.status(418).json({mensagem: `user id ${id} nao encontrado` }))
//     res.status(418).json(userID)
// })

app.patch('/rec', async (req,res) => {
try{    
    const { email, Nsenha } = req.body

    const findUpdate = await User.findOneAndUpdate({ email } , { senha: Nsenha }, {new: true})

    if(!findUpdate){
      return  res.status(404).json({mensagem:"Usuario não encontrado"})
    } 

    res.status(201).json(findUpdate)
}
catch(err){
    res.status(418).json({mensagem: "falha interna!!!"})
};
   


app.delete('/Users/:id', async (req, res) => {
    // const id = req.params.id

    // const userReal = Users.find(user => user.id === Number(id))

    // if(!userReal){
    //     return res.status(404).json({mensagem:"usuario inexistente"})
    // }

    // Users = Users.filter(user => user.id !== Number(id))
    // res.status(418).json(Users)
    const id = req.params.id

    const userReal = User.findById(id)
    if(!userReal){
        return res.status(418).json({ mensagem: "Usuario inexistente"})
    }
    const deleteUser = await User.findByIdAndDelete(id)
    const Users = await User.find()

    res.status(200).json({ mensagem: "Usuario deletado"}, Users)
})})


app.post('/pais', async (req, res) => {
    try{
        const { email, senha, npais } = req.body
        const findtrade = await findOndeAndUpdate({ email }, { senha }, { pais: npais}, { new: true})
        if(!findtrade){
            return  res.json({mensagem: 'User não encontrado'})
        }
        
    }
    catch(err){
        res.status(404).json({mesagem: "Usuario nao achado"})
        
    };
    

    
})