# JavaScript: Funções e Parâmetros

Neste guia, vamos explorar diferentes conceitos relacionados a funções em JavaScript, incluindo declaração de funções, expressões de função, hoisting, utilização de argumentos em funções e parâmetros padrão.

## Declaração de Função

Vamos começar com a declaração de funções em JavaScript.

```javascript
// Function Declaration
function movie() {
    console.log('The Matrix')
}
movie()
```

## Expressão de Função

Agora, vamos explorar a expressão de função em JavaScript.

```javascript
// Function Expression
const car = function() {
    console.log('Tesla')
}
car()

const truck = car
truck()
```

## Hoisting

Vamos entender como o hoisting afeta a declaração de funções.

```javascript
// Hoisting
movie()
function movie() {
    console.log('The Matrix')
}

// Function Expression dont work
car2()

const car2 = function() {
    console.log('Tesla')
}
```

## Utilizando Argumentos em Função

Vamos ver como usar argumentos em uma função em JavaScript.

```javascript
// Utilizando Argumentos em Função 
function price(a, b) {
    return a + b
}

console.log(price(10, 20))
console.log(price(10, 20, 30, 40, 50))
console.log(price(10))

function priceArgs() {
    let total = 0
    for (let value of arguments)
        total += value
    return total
}

console.log(priceArgs(10, 20))
console.log(priceArgs(10, 20, 30, 40, 50))
console.log(priceArgs(10))
```

## Parâmetros Padrão

Finalmente, vamos explorar o uso de parâmetros padrão em funções.

```javascript
// Parâmetros Default 
function carLoan(loan, rate = 2.9, years = 5) {
    return (loan * rate / 100 * years) + loan
}
console.log(carLoan(20_000))
```