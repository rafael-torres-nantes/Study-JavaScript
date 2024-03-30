const numArrays = [1, 2, 3, 4]
const numFriendsv = ['Felipe', 'Mariana', 'Pedro']

// add fim do array
numArrays.push(5)
console.log(numArrays)

// add inicio do array
numArrays.unshift(0)
console.log(numArrays)

// splice
// vetor.splice(start_number, delete_count, itens)
numArrays.splice(3, 0, -1, -2, -3)
console.log(numArrays)

 // Localizando itens no Array
 const findNumb = [6, 7, 8, 9, 10]

 console.log(findNumb.indexOf(8))
 console.log(findNumb.indexOf(1)) // retorna -1 

// Localizando itens em um Array de referencia 
const movie = [
    {id : 1, movieName : 'Dejavu'},
    {id : 2, movieName : 'Back to the Future'},
    {id : 3, movieName : 'Matrix'}
]

// nao funciona
console.log(movie.includes({id : 1, movieName : 'Dejavu'}))

console.log(movie.find(function(movie) {
    return movie.movieName == 'Matrix'
}))

// Utilizando arrow function
console.log(movie.find(movie => movie.movieName == 'Matrix'))

 // Localizando itens no Array
const removeNum = [6, 7, 8, 9, 10]
const final = removeNum.pop()

// remove ultimo item
console.log(final)

// remove o primeiro item
final = removeNum.shift()
console.log(final)

// vetor.splice(start_number, delete_count, itens)
// remove os dois itens apartir do 3º index
final = removeNum.shift()
numArrays.splice(3, 2)