let num1 = 5
let num2 = 2

console.log("Soma: "+ (num1 + num2))
console.log("Subtracão: "+ (num1 + num2))
console.log("Multiplicação: "+ (num1 * num2))
console.log("Divisão: "+ (num1 / num2))
console.log("Exponenciação: "+ (num1 ** num2))
console.log("Resto: "+ (num1 % num2))

// Operador de Incremento : Antes do Valor
// Incrementa antes do uso da Variavel
let total = num1 + num2

console.log("Total do ++X: " + (++total))
console.log("Total do --X: " + (--total))

// Operador de Incremento : Depois do Valor
// Incrementa após do uso da Variavel
total = num1 + num2

console.log("Total do X++: " + (total++))
console.log("Total do X--: " + (total--))

// Operador de Atribuição 
num = 0

num += 1
console.log("Total: " + num)
num -= 1
console.log("Total: " + num)

// Operador de Comparação
console.log(num1 > num2)
console.log(num1 < num2)
console.log(num1 >= num2)
console.log(num1 <= num2)
console.log(num1 == num2)
console.log(num1 != num2)

console.log('1' == '1')
console.log('1' == 1)

// Nao são o mesmo tipo
console.log('1' === 1)
console.log('1' === '1')

// Operador Ternário

let driver = 90
let speed = driver > 100 ? 'Above' : 'Below'

console.log(speed)

// Operador Lógico
// Pode usar operadores logicos como string

let temIdadeMinima = true
let temTituloDeEleitor = true

let podeVotar = temIdadeMinima && temTituloDeEleitor
console.log('Pode viajar:' + podeVotar  + '!')

let temAlgumDosDois = temIdadeMinima || temTituloDeEleitor
let possoViajar = !podeVotar
console.log('Pode viajar:' + possoViajar  + '!')

let corCliente = 'white'
let corEstoque = 'black'
let corVendida = corCliente || corEstoque

console.log(corVendida)

// Declarações Condicionais

let velCarro = 110

if (velCarro >= 110) {
    console.log('Driving too fast')
}

else if (velCarro > 40 && velCarro < 110) {
    console.log('Ok!')
}

else 
    console.log('Driving too slow')


// Switch

let airport = 'MCO'

switch (airport) {
    case 'MCO':
        console.log('Orlando')
        break

    case 'JFK':
        console.log('John F. Kennedy')
        break

    default:
        console.log('Unknown')
}

// Estrutura de repetição

let i = 0

for(i = 0; i < 10; i++) {
    console.log('Numero: ', i)
}

i = 0

while (i <= 10) {
    console.log('Numero: ', i)
    i += 1 
}

i = 0

do {
    console.log('Numero: ', i)
    i += 1 
} while (i <= 10)

// For in loop

const myCar = {
    model : 'BMW',
    year : 2023,
    km : 12000
}

for (let i in myCar) {
    console.log(i, myCar[i])
}


// For of loop

const friends = ['Carlos', 'Lucas', 'Murilo']

for (let i of friends) {
    console.log(i)
}
