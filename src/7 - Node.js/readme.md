# Aprendendo Node.js

Este repositório contém o registro do meu aprendizado sobre Node.js, uma plataforma para executar JavaScript no lado do servidor. Aqui, vou compartilhar informações sobre Node.js, bem como alguns comandos importantes que tenho aprendido ao longo do caminho.

## O que é Node.js?

Node.js é uma plataforma de código aberto, construída sobre o motor JavaScript V8 do Google Chrome, que permite executar código JavaScript no lado do servidor. Ele é projetado para criar aplicativos da web escaláveis e eficientes em termos de tempo de execução.

## Comandos Importantes

### Instalando o Node.js

Para instalar o Node.js, você pode seguir estas etapas:

1. Visite o [site oficial do Node.js](https://nodejs.org/).
2. Faça o download da versão adequada para o seu sistema operacional.
3. Siga as instruções de instalação.

### Testando o Node.js

Após a instalação, você pode verificar se o Node.js foi instalado corretamente executando o seguinte comando no seu terminal:

```bash
node -v
```
> Este comando retornará a versão do Node.js instalada.

### O comando `node`

O comando `node` é utilizado para executar scripts JavaScript no lado do servidor. Você pode executar um arquivo JavaScript usando o seguinte comando:

```bash
node nome_do_arquivo.js
```

## O que é npm?

npm (Node Package Manager) é o gerenciador de pacotes padrão para o ecossistema Node.js. Ele permite que você instale e gerencie bibliotecas e frameworks para seus projetos.

### Criando um projeto

Para iniciar um novo projeto Node.js, você pode criar um arquivo `package.json` executando o seguinte comando no diretório do seu projeto:

```bash
npm init
```

Este comando guiará você através de um processo para criar um arquivo `package.json`, que contém metadados sobre seu projeto e suas dependências.

## Instalando o Express

O comando `npm install express` é usado para instalar o framework Express.js em seu projeto Node.js. Este framework facilita o desenvolvimento de aplicações web robustas e escaláveis, fornecendo uma estrutura organizada e recursos poderosos.

```bash
npm install express
```


## Imprimindo uma Mensagem

O "Hello World" é frequentemente o primeiro passo em qualquer linguagem de programação. No Node.js, podemos facilmente imprimir uma mensagem no console usando `console.log()`.

```javascript
let message = 'Hello World!!';
console.log(message);
```

## Trabalhando com Arquivos

O Node.js fornece um módulo `fs` para trabalhar com arquivos no sistema de arquivos. Isso inclui leitura, escrita, exclusão e renomeação de arquivos.

### Lendo um Arquivo

No Node.js, a leitura de arquivos pode ser realizada de maneira assíncrona utilizando o módulo `fs`.

```javascript
let { readFile } = require('fs');
readFile('arquivo.txt', 'utf8', (error, texto) => {
    if(error) {
        throw error;
    } else {
        console.log(texto);
    }
});
```

### Escrevendo em um Arquivo

Da mesma forma, podemos escrever em arquivos usando o módulo `fs`.

```javascript
let { writeFile } = require('fs');
writeFile('arquivo.txt', 'Texto por write file', (error) => {
    if(error) {
        console.log(error);
    } else {
        console.log("Escreveu com sucesso");
    }
});
```

## Criando um Servidor HTTP

O módulo `http` nativo do Node.js permite criar um servidor HTTP básico. Este servidor pode responder a requisições com conteúdo HTML.

```javascript
const { createServer } = require('http');
let server = createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(`
    <h1>Hello World</h1>
    <p>Primeira página com Node.js</p>
    `);
    response.end();
});
server.listen(5000);
console.log('Ouvindo a porta 5000');
```

## Introdução ao Express

Express é um framework para Node.js que simplifica a criação de aplicações web e APIs. Ele é especialmente útil para definir rotas e lidar com solicitações HTTP.

## REST e RESTful

REST é um conjunto de princípios de arquitetura para sistemas distribuídos. Quando uma aplicação segue esses princípios, diz-se que ela é RESTful. Esses conceitos são fundamentais para criar APIs eficientes.

## Verbos HTTP

Os verbos HTTP (GET, POST, PUT, DELETE) são usados para indicar a ação que deve ser realizada em um recurso. Eles são amplamente utilizados em APIs RESTful para realizar operações CRUD.


| Verbo HTTP | Ação CRUD          | Descrição                  |
|------------|--------------------|-------------------------------------------------------------------------------------------------------|
| GET | Read | Solicita a representação de um recurso específico. Não deve alterar o estado do recurso. |
| POST| Create | Utilizado para criar um novo recurso.|
| PUT | Update/Replace | Substitui todas as atuais representações do recurso de destino pela carga de dados da requisição.|
| DELETE | Delete | Remove um recurso específico. 

## Rotas no Express

As rotas definem os endpoints da sua aplicação ou API e os métodos HTTP que eles aceitam. No Express, as rotas são facilmente criadas para atender a diferentes requisitos de funcionalidade.

## Criando uma Aplicação com Express

Aqui está um exemplo básico de como iniciar uma aplicação Express e definir algumas rotas:

```javascript
let express = require('express');
let app = express();

app.get('/', function(req, res) {
    res.send('Primeira rota com Express');
});

app.get('/teste', function(req, res) {
    res.send('Segunda rota com Express');
});

app.listen(3000, function() {
    console.log('A aplicação está funcionando na porta 3000');
});
```

## Testando APIs com Postman

[Postman](https://www.postman.com/) é um software essencial para desenvolver e testar APIs. Ela permite enviar requisições HTTP para a sua API e visualizar as respostas, facilitando o teste e a depuração.