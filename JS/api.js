import axios from 'axios'
import cors from 'cors'
const valor = 100
const selectde = document.getElementById('de')
const selectpara = document.getElementById('para')


const moedasinfo = {
  AUD: { nome: "Dólar Australiano", bandeira: "🇦🇺" },
  BRL: { nome: "Real Brasileiro", bandeira: "🇧🇷" },
  CAD: { nome: "Dólar Canadense", bandeira: "🇨🇦" },
  CHF: { nome: "Franco Suíço", bandeira: "🇨🇭" },
  CNY: { nome: "Yuan Chinês", bandeira: "🇨🇳" },
  CZK: { nome: "Coroa Tcheca", bandeira: "🇨🇿" },
  DKK: { nome: "Coroa Dinamarquesa", bandeira: "🇩🇰" },
  GBP: { nome: "Libra Esterlina", bandeira: "🇬🇧" },
  HKD: { nome: "Dólar de Hong Kong", bandeira: "🇭🇰" },
  HUF: { nome: "Forint Húngaro", bandeira: "🇭🇺" },
  IDR: { nome: "Rupia Indonésia", bandeira: "🇮🇩" },
  ILS: { nome: "Novo Shekel Israelense", bandeira: "🇮🇱" },
  INR: { nome: "Rupia Indiana", bandeira: "🇮🇳" },
  ISK: { nome: "Coroa Islandesa", bandeira: "🇮🇸" },
  JPY: { nome: "Iene Japonês", bandeira: "🇯🇵" },
  KRW: { nome: "Won Sul-Coreano", bandeira: "🇰🇷" },
  MXN: { nome: "Peso Mexicano", bandeira: "🇲🇽" },
  MYR: { nome: "Ringgit Malaio", bandeira: "🇲🇾" },
  NOK: { nome: "Coroa Norueguesa", bandeira: "🇳🇴" },
  NZD: { nome: "Dólar Neozelandês", bandeira: "🇳🇿" },
  PHP: { nome: "Peso Filipino", bandeira: "🇵🇭" },
  PLN: { nome: "Złoty Polonês", bandeira: "🇵🇱" },
  RON: { nome: "Leu Romeno", bandeira: "🇷🇴" },
  SEK: { nome: "Coroa Sueca", bandeira: "🇸🇪" },
  SGD: { nome: "Dólar de Singapura", bandeira: "🇸🇬" },
  THB: { nome: "Baht Tailandês", bandeira: "🇹🇭" },
  TRY: { nome: "Lira Turca", bandeira: "🇹🇷" },
  USD: { nome: "Dólar Americano", bandeira: "🇺🇸" },
  ZAR: { nome: "Rand Sul-Africano", bandeira: "🇿🇦" }
};

Object.keys(moedasinfo).forEach(coin => {
    selectde.innerHTML += `<option value="${coin}">${moedasinfo[coin].bandeira}  -  ${moedasinfo[coin].nome}</option>` 
    selectpara.innerHTML += `<option value="${coin}">${moedasinfo[coin].bandeira}  -  ${moedasinfo[coin].nome}</option>` 
})

const con = document.getElementById('C-btn')
con.addEventListener('click', async () => {
    const valord = selectde.value
    const valorp = selectpara.value
    const amonto = document.getElementById('amonto').value
    const result = document.getElementById('result')


    const { data } = await axios.get(`https://api.frankfurter.dev/v1/latest?amount=${amonto}&from=${valord}&to=${valorp}`)
    result.textContent = ` ${amonto} ${valord} = ${data.rates[valorp]} ${valorp}`
})
const trocatroca = document.getElementById('trade')
trocatroca.addEventListener('click', () => {
    [selectde.value , selectpara.value] = [selectpara.value, selectde.value]
})
const origem = 'BRL'
const destino = 'USD'
const api = async () => {
    const res = await axios.get(`https://api.frankfurter.dev/v1/latest?amount=${valor}&from=${origem}&to=${destino}`)
    console.log(res.data)
}
api()




const nome = localStorage.getItem("nome")

if(!nome){
    document.getElementById('name').textContent = "Fazer Login"
    document.getElementById('name').addEventListener('click', () => {window.location.href = '/loginn.html';})
} else{
document.getElementById('name').textContent = nome
}
