# Guia de JavaScript: Introdução e Conceitos Básicos

Neste guia, exploraremos os fundamentos do desenvolvimento em JavaScript, abordando diferentes conceitos e técnicas essenciais para construir aplicações web dinâmicas. Vamos examinar o código fornecido e entender cada parte dele.

## Objeto JavaScript

Em JavaScript, os objetos são estruturas de dados que permitem armazenar múltiplos valores relacionados. No código fornecido, há um exemplo de criação de um objeto com informações sobre um livro:

```javascript
const book = {
    bookTitle: 'Atomic Habits',
    bookAuthor: 'James Clear',
    bookPages: 306,
    bookChapters: {
        chap1: 'Fundamentals',
        chap2: '1st law'
    },
    printBook: function() {
        console.log('Printing...');
    }
};
```

Este objeto `book` possui propriedades como `bookTitle`, `bookAuthor`, `bookPages` e `bookChapters`, bem como um método `printBook` que imprime uma mensagem no console.

## Função de Fábrica (Factory Function)

Uma função de fábrica é uma função que retorna objetos. No código fornecido, há uma função `createBook` que serve como uma fábrica para criar instâncias de livros:

```javascript
function createBook(title, author, pages) {
    const book = {
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
        printBook: function() {
            console.log('Printing...');
        }
    };
    return book;
}

const book1 = createBook('Atomic', 'James', 306);
const book2 = createBook('Think', 'Napolean', 420);
```

Essa função `createBook` aceita parâmetros como `title`, `author` e `pages` para criar novos objetos de livro.

## Construtor JavaScript

Um construtor é uma função especial em JavaScript usada para criar e inicializar um objeto criado a partir de uma classe. Abaixo está um exemplo de uma função construtora `CreateBookConstructor`:

```javascript
function CreateBookConstructor(title, author, pages) {
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages;
}

const book3 = new CreateBookConstructor('Atomic', 'James', 306);
const book4 = new CreateBookConstructor('Think', 'Napolean', 420);
```

Esta função construtora `CreateBookConstructor` é usada para criar novas instâncias de livros usando a palavra-chave `new`.

## Bibliotecas Integradas (Built-in Libraries)

JavaScript fornece bibliotecas integradas que oferecem funcionalidades úteis. No código fornecido, são demonstrados alguns métodos da biblioteca `Math`:

```javascript
console.log(Math.min(1, 4, 12, 5, 9));  // Encontra o menor valor
console.log(Math.max(1, 4, 12, 5, 9));  // Encontra o maior valor
console.log(Math.E);  // Retorna o valor de E (constante matemática)
console.log(Math.round(5.2));  // Arredonda para o número inteiro mais próximo
console.log(Math.round(5.6));  // Arredonda para o número inteiro mais próximo
```

Esses métodos são úteis para realizar operações matemáticas e arredondamentos em JavaScript.

## Bibliotecas (String Methods)

JavaScript também oferece métodos para manipulação de strings. Abaixo estão alguns exemplos de métodos de string:

```javascript
let message = 'Hey, my name is Rafa';

console.log(message.startsWith('Hey'));  // Verifica se a string começa com 'Hey'
console.log(message.startsWith('hey'));  // Verifica se a string começa com 'hey' (diferencia maiúsculas de minúsculas)
console.log(message.length);  // Retorna o comprimento da string
console.log(message.includes('por'));  // Verifica se a string contém 'por'
console.log(message.includes('Rafa'));  // Verifica se a string contém 'Rafa'
console.log(message.endsWith('afa'));  // Verifica se a string termina com 'afa'
console.log(message.endsWith('el'));  // Verifica se a string termina com 'el'
```

Esses métodos fornecem funcionalidades para manipulação e verificação de strings em JavaScript.

## Template Literals

Template Literals são uma forma de criar strings com suporte a expressões embutidas. Abaixo estão exemplos de uso de Template Literals:

```javascript
let nameEmail = 'Sarah';
const email = `Hi ${nameEmail}, 
The meeting is confirmed !! 
Att`;

console.log(email);
```

Template Literals permitem interpolação de variáveis e quebras de linha dentro de strings, facilitando a criação de strings multilinhas e dinâmicas.