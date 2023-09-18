window.onload = () => {
    let boasVindas = document.getElementById('boasVindas')
    const urlParams = new URLSearchParams(window.location.search)
    const usuario = urlParams.get('user')
    usuario === null ? location.replace('index.html') : boasVindas.innerHTML = `Olá, ${usuario}, bem-vindo!`
}

const btnCoolab = document.getElementById('colaboradores')
btnCoolab.addEventListener('click', (event) => {
    funcoesCalcule(event.currentTarget)
})

const funcoesCalcule = (funcao) => {
    let arrFuncoes = [
        {elemento: document.getElementById('conteudo-info'), funcao: 'info'},
        {elemento: document.getElementById('divCalculadora'), funcao: 'calculadora'},
        {elemento: document.getElementById('divArea'), funcao: 'area'},
        {elemento: document.getElementById('divBhaskara'), funcao: 'bhaskara'},
        {elemento: document.getElementById('divIdade'), funcao: 'idade'},
        {elemento: document.getElementById('divIMC'), funcao: 'IMC'},
        {elemento: document.getElementById('divColaboradores'), funcao: 'colaboradores'}
    ]

    arrFuncoes.forEach((item) => {
        if (item.funcao != funcao.id){
            item.elemento.style.setProperty('display','none','important')
        }else {
            item.elemento.style.setProperty('display','block','important')
        }
    })
}

/* INFO */
const info = document.getElementById('info')
info.addEventListener('click', (event) => {
    funcoesCalcule(event.currentTarget)
})

/* IMC */
const IMC = document.getElementById('IMC')
IMC.addEventListener('click', (event) => {
    document.getElementById('peso').value = ''
    document.getElementById('altura').value = ''
    document.getElementById('resultadoIMC').value = ''
    funcoesCalcule(event.currentTarget)
})

const mascaraIMC = (e) => {
    let valor = e.value
    valor = valor.replace(/[,.\-+]/g, '')
    e.value = valor
}

const calcularIMC = () => {
    let resultadoIMC = document.getElementById('resultadoIMC')
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value

    altura = altura/100
    const IMC = peso / (Math.pow(altura, 2))
    resultadoIMC.value = parseFloat(IMC).toFixed(2)
  }
const btnIMC = document.getElementById('calcularIMC')
btnIMC.addEventListener('click', calcularIMC)

/* ÁREA */
const area = document.getElementById('area')
area.addEventListener('click', (event) => {
    document.getElementById('base').value = ''
    document.getElementById('alturaA').value = ''
    document.getElementById('resultadoArea').value = ''
    funcoesCalcule(event.currentTarget)
})

const calcularArea = () => {
    let resultadoArea = document.getElementById('resultadoArea')
    let base = document.getElementById('base').value
    let alturaA = document.getElementById('alturaA').value

    resultadoArea.value = (base*alturaA/2).toFixed(2)
  }
const btnArea = document.getElementById('calcularArea')
btnArea.addEventListener('click', calcularArea)

/* IDADE */
const idade = document.getElementById('idade')
idade.addEventListener('click', (event) => {
    document.getElementById('ano').value = ''
    document.getElementById('resultadoIdade').value = ''
    funcoesCalcule(event.currentTarget)
})

const calcularIdade = () => {
    let resultadoIdade = document.getElementById('resultadoIdade')
    let anoNascimento = document.getElementById('ano').value
    const anoAtual = new Date().getFullYear()

    resultadoIdade.value = `Você tem ${(anoAtual - anoNascimento).toString()} ano(s) de idade.`
  }
const btnIdade = document.getElementById('calcularIdade')
btnIdade.addEventListener('click', calcularIdade)

/* BHASKARA */
const bhaskara = document.getElementById('bhaskara')
bhaskara.addEventListener('click', (event) => {
    document.getElementById('A').value = ''
    document.getElementById('B').value = ''
    document.getElementById('C').value = ''
    document.getElementById('resultadoBhaskara').value = ''
    funcoesCalcule(event.currentTarget)
})

const calcularBhaskara = () => {
    let resultado = ''
    let resultadoBhaskara = document.getElementById('resultadoBhaskara')
    const A = document.getElementById('A').value
    const B = document.getElementById('B').value
    const C = document.getElementById('C').value
    const delta = (B * B) - (4 * A * C)

    if (delta < 0) {
        resultado = "Delta negativo. Não há raízes reais"
    } else if (delta === 0) {
        const raiz = -B / (2 * A)
        resultado = `Raiz única: ${raiz.toFixed(2)}`
    } else {
        const raiz1 = (-B + Math.sqrt(delta)) / (2 * A)
        const raiz2 = (-B - Math.sqrt(delta)) / (2 * A)
        resultado = `Raíz 1: ${raiz1.toFixed(2)}, Raíz 2: ${raiz2.toFixed(2)}`
    }

    resultadoBhaskara.value = resultado;
  }
const btnBhaskara = document.getElementById('calcularBhaskara')
btnBhaskara.addEventListener('click', calcularBhaskara)

/* CALCULADORA */
const calculadora = document.getElementById('calculadora')
calculadora.addEventListener('click', (event) => {
    document.getElementById('resultado').innerText = ''
    funcoesCalcule(event.currentTarget)
})
function validarInsert() {
    const caracteresDisplayCalc = document.getElementById('resultado').textContent.length
    const limiteMax = 30
    return caracteresDisplayCalc == limiteMax ? false : true
}
document.addEventListener('keydown', tecladoNumerico);
function tecladoNumerico(e) {
    let teclas = [
        { tecla: '0', acao: insert },
        { tecla: '1', acao: insert },
        { tecla: '2', acao: insert },
        { tecla: '3', acao: insert },
        { tecla: '4', acao: insert },
        { tecla: '5', acao: insert },
        { tecla: '6', acao: insert },
        { tecla: '7', acao: insert },
        { tecla: '8', acao: insert },
        { tecla: '9', acao: insert },
        { tecla: '/', acao: insert },
        { tecla: '*', acao: insert },
        { tecla: '-', acao: insert },
        { tecla: '+', acao: insert },
        { tecla: '.', acao: insert },
        { tecla: 'Backspace', acao: back },
        { tecla: 'Enter', acao: calcular },
        { tecla: 'Escape', acao: clean}
    ]

    for (let prop of teclas) {
        if (prop.tecla === e.key) {
            prop.acao(e.key)
            break;
        }
    }
}
function insert(num) {
    if (validarInsert()) {
        var numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num;
    } else {
        back()
    }
}
function clean() {
    document.getElementById('resultado').innerHTML = "";
}
function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}
function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}
