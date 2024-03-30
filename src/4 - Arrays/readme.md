# JavaScript: Manipulação de Arrays

Neste guia, vamos explorar diferentes operações de manipulação de arrays em JavaScript, incluindo adição de elementos, remoção de elementos, localização de itens, concatenação de arrays, fatiamento, união de elementos em uma string e reversão de ordem.

## Adição e Remoção de Elementos

Vamos começar adicionando e removendo elementos em um array.

```javascript
// Definição do array numArrays
const numArrays = [1, 2, 3, 4]

// Adicionando um elemento ao fim do array
numArrays.push(5)
console.log(numArrays)

// Adicionando um elemento ao início do array
numArrays.unshift(0)
console.log(numArrays)

// Utilizando o método splice para adicionar elementos em uma posição específica
numArrays.splice(3, 0, -1, -2, -3)
console.log(numArrays)
```

Para continuar, clique [aqui](#localização-de-elementos).

## Localização de Elementos

Agora, vamos localizar elementos em um array utilizando diferentes métodos.

```javascript
// Localizando itens no array findNumb
const findNumb = [6, 7, 8, 9, 10]

console.log(findNumb.indexOf(8)) // Retorna o índice do elemento 8
console.log(findNumb.indexOf(1)) // Retorna -1 pois o elemento 1 não está presente no array

// Localizando itens em um array de objetos movie
const movie = [
    {id: 1, movieName: 'Dejavu'},
    {id: 2, movieName: 'Back to the Future'},
    {id: 3, movieName: 'Matrix'}
]

console.log(movie.find(movie => movie.movieName == 'Matrix'))
```

Para continuar, clique [aqui](#remoção-de-elementos).

## Remoção de Elementos

Vamos remover elementos de um array.

```javascript
// Removendo elementos do array removeNum
const removeNum = [6, 7, 8, 9, 10]
let final = removeNum.pop() // Remove e retorna o último elemento do array
console.log(final)

final = removeNum.shift() // Remove e retorna o primeiro elemento do array
console.log(final)

// Removendo os dois primeiros elementos do array numArrays
numArrays.splice(0, removeNum.length)
```

Para continuar, clique [aqui](#concatenação-de-arrays).

## Concatenação de Arrays

Vamos concatenar dois arrays em um único array.

```javascript
// Concatenando arrays
let numbers = [5, 6, 7, 8]
let letters = ['a', 'b', 'c']

let all = numbers.concat(letters)
console.log(all)
```

Para continuar, clique [aqui](#fatia-de-arrays).

## Fatia de Arrays

Vamos obter uma parte específica de um array utilizando o método slice.

```javascript
// Obtendo uma parte do array utilizando slice
let half = all.slice(3, 5)
console.log(half)
```

Para continuar, clique [aqui](#união-de-elementos-em-uma-string).

## União de Elementos em uma String

Vamos unir os elementos de um array em uma única string utilizando o método join.

```javascript
// Unindo elementos do array em uma string com join
let myFriends = ['Felipe', 'Mariana', 'Pedro']
let myFriendsJoin = myFriends.join(', ')
console.log(myFriendsJoin)
```

Para continuar, clique [aqui](#reversão-de-ordem-de-elementos).

## Reversão de Ordem de Elementos

Vamos reverter a ordem dos elementos em um array.

```javascript
// Revertendo a ordem dos elementos do array friendsName
let friendsName = ['Lucas', 'Adele', 'Mirio']
friendsName.sort()
console.log(friendsName)

friendsName.reverse()
console.log(friendsName)
```

Para continuar, clique [aqui](#verificação-de-elementos-no-array).

## Verificação de Elementos no Array

Vamos verificar se todos os elementos de um array são positivos utilizando o método every e filtrar elementos positivos utilizando o método filter.

```javascript
// Verificando se todos os elementos do array são positivos com every
const tempLondon = [18, 13, 8, 2]
const tempAntartica = [9, 8, -6]

let tempPositiveEvery = tempLondon.every(function(value) {
    return 0 <= value 
})
console.log(tempPositiveEvery)

tempPositiveEvery = tempAntartica.every(function(value) {
    return 0 <= value 
})
console.log(tempPositiveEvery)

// Filtrando elementos positivos em um array com filter
let tempPositiveFilter = tempLondon.filter(function(value) {
    return 0 <= value 
})
console.log(tempPositiveFilter)

tempPositiveFilter = tempAntartica.filter(function(value) {
    return 0 <= value 
})
console.log(tempPositiveFilter)
```