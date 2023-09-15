window.onload = () => {
    const urlDados = new URLSearchParams(window.location.search).get('dados')
    arrUsuarios.push(JSON.parse(decodeURIComponent(urlDados)))
}

var arrUsuarios = []
const entrar = document.getElementById('entrar')
const voltar = document.getElementById('voltar')
const validarUsuario = (usuarioV, senhaV) => {
    if (arrUsuarios[0] != null) {
        const usuarioSenhaEncontrado = arrUsuarios.some(([usuario, senha]) => usuario === usuarioV.value && senha === senhaV.value);
    
        if (usuarioSenhaEncontrado) {
            return true;
        }
    }
    alert('Usuário ou senha não encontrados!');
    return false;
}

const validar = (usuario, senha) => {
    let validacao = true
    let validar = [usuario, senha]

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
entrar.addEventListener('click', () => {
    let usuario = document.getElementById('usuario')
    let senha = document.getElementById('senha')

    if (validar(usuario, senha) && validarUsuario(usuario, senha)) {
        location.replace(`calculadora.html?user=${usuario.value}`)
    }
})