// programa 1:

var nome = 'Christopher'
var idade = 29

console.log(`Olá, meu nome é ${nome} e tenho ${idade}.`)

// programa 2:

const nome1 = 'Tito'
const cidade = 'Recife'

console.log(`${nome1} é de ${cidade}.`)

// programa 3:

const num1 = 10
const num2 = 55
const soma = num1 + num2
const subtracao = num2 - num1
const divisao = num1 / num2
const multiplicacao = num1 * num2

console.log(`As respostas das quatro operações são ${soma}, ${subtracao}, ${divisao.toFixed(2)} e ${multiplicacao}.`)

// Área:

const base = 5
const H = 9
const area = base * H / 2

console.log(`A área do triângulo é ${area}.`)

// Média:

const nota1 = 8
const nota2 = 5
const nota3 = 10

const media = (nota1 + nota2 + nota3) / 3

console.log(`O resultado da média é ${media.toPrecision(2)}.`)

// Desconto:

const valor_produto = 500
const p_desconto = 0.20
const preco_final = valor_produto - (valor_produto * p_desconto)

const n1 = valor_produto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
const n2 = preco_final.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

console.log(`Oferta relâmpago! Aproveite ${p_desconto*100}% de desconto por tempo limitado! De ${n1} por ${n2}.`)

// Imposto de renda:

const salario_bruto = 2750 // De R$ 1.903,99 a R$ 2.826,65: 7,5%
const taxa = 0.075
const imposto = (salario_bruto - 1903.98) * taxa

const IMP = imposto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

console.log(`O imposto de renda é: ${IMP}.`)

// Conversor de Moedas:

const taxa_cambio = 5.51
const valor_incial = 250
const valor_final = valor_incial / taxa_cambio

const n3 = valor_incial.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
const n4 = valor_final.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})

console.log(`Hoje, os ${n3} equivalem a ${n4} na cotação atual de ${taxa_cambio}.`)

// Celsius para Fahrenheit:

const Celsius = 35
const Fahrenheit = (Celsius * 9 / 5) + 32

console.log(`Está fazendo ${Celsius}°C aqui no Brasil, lá nos EUA seria igual a ${Fahrenheit}°F.`)

// IMC:

const peso = 85
const altura = 1.82

const IMC = peso / (altura * altura)

console.log(`O resultado do IMC é ${IMC.toFixed(2)}.`)
