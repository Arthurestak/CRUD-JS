const validadorCadastro = require('./backend/validadorCadastro')

test('Email inválido!', () =>{
    expect(validadorCadastro('Arthur','arthurestak@gmailaaaaaaa.com','Arthur2007')).toBe(false)
})
test('Senha inválida!', () =>{
    expect(validadorCadastro('Arthur','arthurestak@gmail.com','Arthur')).toBe(false)
})
test('Nome inválido!', () =>{
    expect(validadorCadastro('Arthur1','arthurestak@gmail.com','Arthur2007')).toBe(false)
})
// test('Senha inválida!', () =>{
//     expect(validaSenha('Arthur')).toBe(false)
// })

// test('Nome válido!', () =>{
//     expect(validaNome('Arthur')).toBe(true)
// })
// test('Nome inválido!', () =>{
//     expect(validaNome('Arthur1')).toBe(false)
// })

// test('Email válido!', () =>{
//     expect(validaEmail('arthurestak@gmail.com')).toBe(true)
// })
// test('Email inválido!', () =>{
//     expect(validaEmail('1234567891234567891234567890123@gmail.com')).toBe(false)
// })