let num1 = 5;
let num2 = 2;

console.log("Soma: "+ (num1 + num2));
console.log("Subtracão: "+ (num1 + num2));
console.log("Multiplicação: "+ (num1 * num2));
console.log("Divisão: "+ (num1 / num2));
console.log("Exponenciação: "+ (num1 ** num2));
console.log("Resto: "+ (num1 % num2));

// Operador de Incremento : Antes do Valor
// Incrementa antes do uso da Variavel
let total = num1 + num2;

console.log("Total do ++X: " + (++total));
console.log("Total do --X: " + (--total));

// Operador de Incremento : Depois do Valor
// Incrementa após do uso da Variavel
total = num1 + num2;

console.log("Total do X++: " + (total++));
console.log("Total do X--: " + (total--));

// Operador de Atribuição 
num = 0;

num += 1;
console.log("Total: " + num);
num -= 1;
console.log("Total: " + num);

// Operador de Comparação
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num1 == num2);
console.log(num1 != num2);

console.log('1' == '1');
console.log('1' == 1);

// Nao são o mesmo tipo
console.log('1' === 1);
console.log('1' === '1');

// Operador Ternário

let driver = 90;
let speed = driver > 100 ? 'Above' : 'Below'

console.log(speed)