// Objeto
let bookTitle = 'Atomic Habits'
let bookAuthor = 'James Clear'
let bookPages = 306

const book = {
    bookTitle : 'Atomic Habits',
    bookAuthor : 'James Clear',
    bookPages : 306,
    bookChapters : {
        chap1 : 'Fundamentals',
        chap2 : '1st law'
    },


    // Function on Object

    printBook: function() {
        console.log('Printing...')
    }
}

console.log(book)

book.printBook()


// Classe = Factory
//blueprint
function createBook(title, author, pages) {
    const book = {
        bookTitle : title,
        bookAuthor : author,
        bookPages : pages,

        printBook: function() {
            console.log('Printing...')
        }
    }

    return book
}
const book1 = createBook('Atomic', 'James', '306')
const book2 = createBook('Think', 'Napolean', '420')


// Constructor

function CreateBookConstructor(title, author, pages) {
    this.bookTitle = title
    this.bookAuthor = author
    this.bookPages = pages

}
const book3 = new CreateBookConstructor('Atomic', 'James', '306')
const book4 = new CreateBookConstructor('Think', 'Napolean', '420')

console.log(book3)

// Objects Built In = Bibliotecas Math

console.log(Math.min(1, 4, 12, 5, 9))
console.log(Math.max(1, 4, 12, 5, 9))
console.log(Math.E)
console.log(Math.round(5.2))
console.log(Math.round(5.6))

// Objects Built In = Bibliotecas

let messagem = 'Hey, my name is Rafa'

console.log(messagem.startsWith('Hey'))
console.log(messagem.startsWith('hey'))
console.log(messagem.length)
console.log(messagem.includes('por'))
console.log(messagem.includes('Rafa'))
console.log(messagem.endsWith('afa'))
console.log(messagem.endsWith('el'))


// Template Litterals

let nameEmail = 'Sarah'
const email = 'Hi ' + nameEmail + ', \nThe meeting is confirmed !! \nAtt'

const email2 = `Hi ${nameEmail}, 
The meeting is confirmed !! 
Att`

console.log(email)
console.log(email2)