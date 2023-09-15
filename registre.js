const criarUsuario = document.getElementById('criar')
const voltar = document.getElementById('voltar')
const validar = (nome, email, usuario, senha) => {
    let validacao = true
    let validar = [nome, email, usuario, senha]

    for (let campo of validar) {
        if (campo.value === ''){
            campo.style.setProperty('border','1px solid red','important')
            setTimeout(() => {
                campo.style.setProperty('border','none','important')
            }, 3000)
            validacao = false
            break;
        }        
    }
    return validacao
}

voltar.addEventListener('click', () => location.replace(`index.html`))
criarUsuario.addEventListener('click', () => {
    let nome = document.getElementById('nome')
    let email = document.getElementById('email')
    let usuario = document.getElementById('usuario')
    let senha = document.getElementById('senha')

    if (validar(nome, email, usuario, senha)) {
        const arrDados = [usuario.value, senha.value]
        const dados = encodeURIComponent(JSON.stringify(arrDados))
        location.replace(`login.html?dados=${dados}`)
    }
})