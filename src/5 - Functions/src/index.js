// Function Declaration
function movie() {
    console.log('The Matrix')
}
movie()

// Function Expression
const car = function() {
    console.log('Tesla')
}
car()

const truck = car
truck()

// Hoisting
// movie()
// function movie() {
//     console.log('The Matrix')
// }

// // Function Expression dont work
// car2()

// const car2 = function() {
//     console.log('Tesla')
// }

// Utilizando Argumentos em Function 
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

// Parâmetros Default 
function carLoan(loan, rate = 2.9, years = 5) {
    return (loan * rate / 100 * years) + loan
}
console.log(carLoan(20_000))
