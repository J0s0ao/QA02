const test = require('tape')
const index = require('./index')

test('Teste1', (t) => {
    t.assert(index.letraounumero(7) === false, "Não é Número")
    t.end()
})

test('Teste2', (t) => {
    t.assert(index.letraounumero("A") === false, "Não é Número")
    t.end()
})

test('Teste3', (t) => {
    t.assert(index.letraounumero(55) === false, "Não é Número")
    t.end()
})

test('Teste4', (t) => {
    t.assert(index.media(7,8,5) === 6.5, "Aprovado")
    t.end()
})

test('Teste5', (t) => {
    t.assert(index.media(5,4,6) === 5, "Reprovado")
    t.end()
})

test('Teste6', (t) => {
    t.assert(index.media(7,7,7) === 7, "Aprovado")
    t.end()
})

test('Teste7', (t) => {
    t.assert(index.FGTS(1540) === 169.40, "Cálculo Certo")
    t.end()
})

test('Teste8', (t) => {
    t.assert(index.FGTS(3560) === 360, "Cálculo Errado")
    t.end()
})

test('Teste9', (t) => {
    t.assert(index.FGTS(45660) === 5022.60, "Cálculo Certo")
    t.end()
})




