const nome = document.getElementById('nome')
const sobrenome = document.querySelector('#sobrenome')

function enviarForm(event) {
    event.preventDefault()
    // console.log(event.target[0].value)
    const dados = []
    for (let i = 0; i < event.target.length; i++) {
        if (event.target[i].value) {
            console.log(event.target[i].value)
            dados.push(event.target[i].value)
        }
    }
    console.log
    // console.log(nome.value, sobrenome.value)
}