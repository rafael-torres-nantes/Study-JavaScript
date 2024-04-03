// Program: Node.js Testing

// 1. Printing a Message
let message  = 'Hello World!!'
console.log(message )

// 2. Init a project .JS using NPM 
// npm init
// npm install express

// 3.1 Reading a File
let {readFile} = require('fs')
readFile('arquivo.txt', 'utf8', (error, texto) => {
    if(error) {
        throw error
    }
    else {
        console.log(texto)
    }

})

// 3.2 Writing to a File
let {writeFile} = require('fs')

writeFile('arquivo.txt', 'Text por write file', (error) => {
    if(error) {
        console.log(error)
    }
    else {
        console.log("Escreveu com sucesso")
    }

})

// 4. Creating an HTTP Server
const {createServer} = require('http')

let server = createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"})
    response.write(`
    <h1>Hello World</h1>
    <p>Primeira página com Node.js</p>
    `)
    response.end()
})

server.listen(5000)
console.log('Ouvindo a porta 5000')

// 5. API (Application Programming Interface) 
/* Framework chamado Express */

// 6. REST e RESTful
// REST = Principios e regras que permitem criar uma aplicação com interface definida
// RESTful =  Capacidade de aplicar o príncipios do REST

// 7. REST and the verb HTTP
// Os verbos http corretos para cada URL para a aplicação
// GET : Solicitar dados;
// POST : Inserir dados;
// DELETE : Deletar dados;
// PUT : Atualizar dados;

// 8. Express
// Framework web para utilizado aplicação .JS
// Utilza módulos HTTP e auxilia criar API

// 8.1 Instalando o Express
// Framework : Estrutura de programação madura
// npm init -y 
// npm install express n 

// 9. Rotas
// Nos sites e API's temos rotas
// Basicamente a URL que queremos acrescentar
// No Express cria-se rotas para serem acessados por HTTP
// Cada rota recebe um método HTTP

// 10. Criando aplicação com Express

let express = require('express')
let app = express();

app.get('/', function(req, res) {
    res.send('Primeira rota com Express')
})


app.get('/teste', function(req, res) {
    res.send('Segunda rota com Express')
})


app.listen(3000, function() {
    console.log('A aplicação está funcionando na porta 3000')
})

// 11. PostMan - Test API
// Software para testar API's
// https://www.postman.com/