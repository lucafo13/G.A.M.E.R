import chart, { Chart } from 'chart.js/auto';


const graf = document.getElementById('MyGrafi')
const conv = document.getElementById('conv')

conv.addEventListener('click', () => {
    window.location.href = 'analises.html#pop'
})
const valores = []
const charte =
new Chart(graf, {
    type: 'line',
    data: {
        labels: ['venda 1', 'venda 2', 'venda 3', 'venda 4  '],
        datasets: [{
            label: "Resumo de vendas",
            data: valores,
            borderWidth: 1,
            borderColor: '#fff'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },

        maintainAspectRatio:true
    }

});
const bt = document.getElementById('b')
bt.addEventListener('click', () => {

    const valor =
        Number(document.querySelector('#pop input').value)

    valores.push(valor)
    charte.data.labels.push(`venda ${charte.data.labels.length + 1}`)

    charte.update()

})