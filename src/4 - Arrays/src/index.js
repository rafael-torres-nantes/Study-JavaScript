// Definição do array numArrays
const numArrays = [1, 2, 3, 4]

// Adicionando um elemento ao fim do array
numArrays.push(5)
console.log(numArrays)

// Adicionando um elemento ao início do array
numArrays.unshift(0)
console.log(numArrays)

// Utilizando o método splice para adicionar elementos em uma posição específica
// vetor.splice(start_number, delete_count, itens)
numArrays.splice(3, 0, -1, -2, -3)
console.log(numArrays)

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

// nao funciona
console.log(movie.includes({id : 1, movieName : 'Dejavu'}))

console.log(movie.find(function(movie) {
    return movie.movieName == 'Matrix'
}))

// Utilizando arrow function para localizar itens no array de objetos movie
console.log(movie.find(movie => movie.movieName == 'Matrix'))

// Removendo elementos do array removeNum
const removeNum = [6, 7, 8, 9, 10]
let final = removeNum.pop() // Remove e retorna o último elemento do array
console.log(final)

final = removeNum.shift() // Remove e retorna o primeiro elemento do array
console.log(final)

// Removendo os dois primeiros elementos do array numArrays
numArrays.splice(0, removeNum.length)

// Concatenando arrays
let numbers = [5, 6, 7, 8]
let letters = ['a', 'b', 'c']

let all = numbers.concat(letters)
console.log(all)

// Obtendo uma parte do array utilizando slice
let half = all.slice(3, 5)
console.log(half)

// Unindo elementos do array em uma string com join
let myFriends = ['Felipe', 'Mariana', 'Pedro']
let myFriendsJoin = myFriends.join(', ')
console.log(myFriendsJoin)

// Revertendo a ordem dos elementos do array friendsName
let friendsName = ['Lucas', 'Adele', 'Mirio']
friendsName.sort()
console.log(friendsName)

friendsName.reverse()
console.log(friendsName)

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
