import chart, { Chart } from 'chart.js/auto';

const irPra = window.location.href
const graf = document.getElementById('MyGrafi')
const conv = document.getElementById('conv')

conv.addEventListener('click', () => {
    window.location.href = 'analises.html#pop'
})
let valores = []
let receita = []
let lucro = []
const charte =
new Chart(graf, {
    type: 'line',
    data: {
        labels: ['Comparação 1'],
        datasets: [{
            label: "Gastos",
            data: valores,
            borderWidth: 1,
            borderColor: '#ce1414',
        },
        {
            label: "Receita",
            data: receita,
            borderWidth: 1,
            borderColor: '#fff',
        },{
            label: "Lucro",
            data: lucro,
            borderWidth: 1,
            borderColor: '#3ac41b'
        }]
    },
    options: {
        scales: {
                x: {
        ticks: {
            color: "#fff"
        },
        grid: {
            color: "rgba(255,255,255,.05)"
        }
    },
               y: {
        ticks: {
            color: "#fff"
        },
        grid: {
            color: "rgba(255,255,255,.05)"
        },
        beginAtZero: true
    }
        },
    responsive: true,
        maintainAspectRatio:true,
        devicePixelRatio: 2
        
    }

});
const bt = document.getElementById('b')

bt.addEventListener('click', () => {
    const grafe = document.getElementById('selecte').value
const inceita = document.getElementById('receita').value
const instos = document.getElementById('gastos').value
    const gasto =
        Number(document.querySelector('#gastos').value)
    charte.config.type = grafe  
    valores.push(gasto)
    receita.push(Number(inceita))
    lucro.push(Number(inceita - gasto))
    charte.data.labels.push(`comparação ${charte.data.labels.length + 1}`)

    const somaG = valores.reduce((acc, agr) => acc + agr, 0)
    const somaR = receita.reduce((acc, agr) => acc+ agr, 0)
    const somaL = lucro.reduce((acc, agr) => acc + agr, 0)
    const gCard = document.getElementById('gSpan')
    const reCard = document.getElementById('reSpan')
    const lCard = document.getElementById('lSpan')
    gCard.textContent = `R$ ${somaG}`
    reCard.textContent = `R$ ${somaR}`
    lCard.textContent = `R$ ${somaL}`
    charte.update()

})
document.getElementById('fec').addEventListener('click', () => {
    window.location.href = '#'
})
document.getElementById('reset').addEventListener('click', () => {

    valores.length = 0
    receita.length = 0
    lucro.length = 0

    charte.data.labels = ['Comparação 1']

    charte.update()

})