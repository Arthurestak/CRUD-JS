const espacoBranco = require('./verificaEspacos')

function validadorCadastro(nome, email, senha){

    // Nome

    if(/\d/.test(nome)){
        return false
    }

    // Senha

    if (senha.length < 8){
        return false
    }
    if (!/\d/.test(senha)){
        return false
    }
    if (!/[A-Z]/.test(senha)){
        return false
    }
    if (!/[a-z]/.test(senha)){
        return false
    }

    // Email

    if(!/^[a-zA-Z0-9._%-+]{7,30}@[a-zA-Z0-9.-]{2,10}\.[a-zA-Z]{2,10}/.test(email)){
        return false 
    }
    espacoBranco(nome, email, senha)
    return true
}

module.exports = validadorCadastro