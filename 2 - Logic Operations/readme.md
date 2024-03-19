# JavaScript

## Explorando lógica de Programação : Operadores Aritiméticos

Neste guia, exploraremos os diversos operadores em JavaScript, desde os básicos de matemática até os mais avançados de comparação e manipulação de strings.

### Operadores matemáticos 

- __Soma (+)__: Soma dois números,

```JavaScript
let num1 = 5;
let num2 = 2;

console.log("Soma: " + (num1 + num2)); // Resultado: 7
```

- __Subtração (-)__: Subtrai dois números.

```JavaScript
console.log("Subtração: " + (num1 - num2)); // Resultado: 3
```
- __Multiplicação (*-*)__: Multiplica dois números.

```JavaScript
console.log("Multiplicação: " + (num1 * num2)); // Resultado: 10
```
- __Divisão (/)__: Divide um número pelo outro.

```JavaScript
console.log("Divisão: " + (num1 / num2)); // Resultado: 2.5
```
- __Resto (%)__: Retorna o resto da divisão de um número pelo outro.

```JavaScript
console.log("Resto: " + (num1 % num2)); // Resultado: 1
```

### Operadores de Incrememnto 

- __Incremento (++)__: Incrementa o valor de uma variável em 1.

- __Decremento (--)__: Decrementa o valor de uma variável em 1.

> Operador de Incremento sntes do Valor significa que incrementa antes do uso da variavel

```JavaScript
let total = num1 + num2;

// Incrementa antes do uso da variável
console.log("Total do ++X: " + (++total)); // Resultado: 8

// Decrementa antes do uso da variável
console.log("Total do --X: " + (--total)); // Resultado: 7

total = num1 + num2;

// Incrementa após o uso da variável
console.log("Total do X++: " + (total++)); // Resultado: 7

// Decrementa após o uso da variável
console.log("Total do X--: " + (total--)); // Resultado: 6

``` 

### Operadores de Comparação 

- __Maior que (>)__: Verifica se um número é maior que outro.

- __Menor que (<)__: Verifica se um número é menor que outro.

- __Maior ou igual a (>=)__: Verifica se um número é maior ou igual a outro.

- __Menor ou igual a (<=)__: Verifica se um número é menor ou igual a outro.

- __Igual a (==)__: Verifica se dois valores são iguais.

- __Diferente de (!=)__: Verifica se dois valores são diferentes.

> Operador de Incremento sntes do Valor significa que incrementa antes do uso da variavel

```JavaScript
console.log(num1 > num2); // true
console.log(num1 < num2); // false
console.log(num1 >= num2); // true
console.log(num1 <= num2); // false
console.log(num1 == num2); // false
console.log(num1 != num2); // true

// Strings
console.log('1' == '1'); // true
console.log('1' == 1); // true

// Tipos diferentes
console.log('1' === 1); // false
console.log('1' === '1'); // true
``` 

### Operador Ternário 

O operador ternário é uma forma concisa de escrever uma instrução condicional.

```JavaScript
let driver = 90;
let speed = driver > 100 ? 'Acima' : 'Abaixo';

console.log(speed); // Resultado: 'Acima'
``` 
