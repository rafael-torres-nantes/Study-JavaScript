# JavaScript: Operações e Estruturas de Controle

Neste guia, vamos explorar operações aritméticas, operadores de incremento, operadores de atribuição, operadores de comparação, operador ternário, operadores lógicos, declarações condicionais e estruturas de repetição em JavaScript.

## Definição de Variáveis
Vamos começar definindo algumas variáveis e realizando operações aritméticas com elas.

```javascript
// Definição de variáveis
let num1 = 5
let num2 = 2

// Operações aritméticas
console.log("Soma: "+ (num1 + num2))
console.log("Subtração: "+ (num1 - num2)) // Corrigido para subtração
console.log("Multiplicação: "+ (num1 * num2))
console.log("Divisão: "+ (num1 / num2))
console.log("Exponenciação: "+ (num1 ** num2))
console.log("Resto: "+ (num1 % num2))
```

## Operadores de Incremento
Vamos explorar o comportamento dos operadores de incremento antes e depois do valor.

```javascript
// Operador de Incremento: Antes do Valor
let total = num1 + num2
console.log("Total do ++X: " + (++total))
console.log("Total do --X: " + (--total))

// Operador de Incremento: Depois do Valor
total = num1 + num2
console.log("Total do X++: " + (total++))
console.log("Total do X--: " + (total--))
```

## Operadores de Atribuição
Vamos entender como funcionam os operadores de atribuição em JavaScript.

```javascript
// Operador de Atribuição 
let num = 0
num += 1
console.log("Total: " + num)
num -= 1
console.log("Total: " + num)
```

## Operadores de Comparação
Aqui estão algumas comparações entre variáveis para entendermos os operadores de comparação.

```javascript
// Operador de Comparação
console.log(num1 > num2)
console.log(num1 < num2)
console.log(num1 >= num2)
console.log(num1 <= num2)
console.log(num1 == num2)
console.log(num1 != num2)

console.log('1' == '1')
console.log('1' == 1)

console.log('1' === 1)
console.log('1' === '1')
```

Para continuar, clique [aqui](#operador-ternário).

## Operador Ternário
Vamos utilizar o operador ternário para definir uma mensagem com base em uma condição.

```javascript
// Operador Ternário
let driver = 90
let speed = driver > 100 ? 'Above' : 'Below'
console.log(speed)
```

## Operadores Lógicos
Agora, vamos explorar os operadores lógicos em JavaScript.

```javascript
// Operador Lógico
let temIdadeMinima = true
let temTituloDeEleitor = true

let podeVotar = temIdadeMinima && temTituloDeEleitor
console.log('Pode votar: ' + podeVotar)

let temAlgumDosDois = temIdadeMinima || temTituloDeEleitor
let possoViajar = !podeVotar
console.log('Posso viajar: ' + possoViajar)

let corCliente = 'white'
let corEstoque = 'black'
let corVendida = corCliente || corEstoque
console.log('Cor vendida: ' + corVendida)
```

## Declarações Condicionais
Aqui estão exemplos de declarações condicionais em JavaScript.

```javascript
// Declarações Condicionais
let velCarro = 110
if (velCarro >= 110) {
    console.log('Driving too fast')
} else if (velCarro > 40 && velCarro < 110) {
    console.log('Ok!')
} else {
    console.log('Driving too slow')
}
```

Para continuar, clique [aqui](#estrutura-de-repetição).

## Estrutura de Repetição - For
Vamos usar um loop for para imprimir números de 0 a 9.

```javascript
// Estrutura de repetição - For
for(let i = 0; i < 10; i++) {
    console.log('Numero: ', i)
}
```

Para continuar, clique [aqui](#estrutura-de-repetição---while).

## Estrutura de Repetição - While
Agora, vamos usar um loop while para imprimir números de 0 a 10.

```javascript
// Estrutura de repetição - While
let i = 0
while (i <= 10) {
    console.log('Numero: ', i)
    i += 1 
}
```

Para continuar, clique [aqui](#estrutura-de-repetição---do-while).

## Estrutura de Repetição - Do-While
Por fim, vamos usar um loop do-while para imprimir números de 0 a 10.

```javascript
// Estrutura de repetição - Do-While
i = 0
do {
    console.log('Numero: ', i)
    i += 1 
} while (i <= 10)
```

Para continuar, clique [aqui](#for-in-loop).

## For-in Loop
Aqui está um exemplo de loop for-in para iterar sobre propriedades de um objeto.

```javascript
// For in loop
const myCar = {
    model : 'BMW',
    year : 2023,
    km : 12000
}
for (let i in myCar) {
    console.log(i, myCar[i])
}
```

Para continuar, clique [aqui](#for-of-loop).

## For-of Loop
Por fim, vamos usar um loop for-of para iterar sobre elementos de um array.

```javascript
// For of loop
const friends = ['Carlos', 'Lucas', 'Murilo']
for (let i of friends) {
    console.log(i)
}
```