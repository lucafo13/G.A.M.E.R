import axios from 'axios'
import cors from 'cors'
const valor = 100
const origem = 'BRL'
const destino = 'USD'
const api = async () => {
    const res = await axios.get(`https://api.frankfurter.app/latest?amount=${valor}&from=${origem}&to=${destino}`)
    console.log(res.data)
}
api()