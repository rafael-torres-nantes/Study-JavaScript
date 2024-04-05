# Projeto CRUD com Node.js e SQLite

Este projeto implementa um aplicativo CRUD (Create, Read, Update, Delete) simples usando Node.js, Express, e SQLite como banco de dados. Ele permite gerenciar informações sobre oportunidades de emprego.

##  Instalação e Configuração

### Instalação das Dependências

Para começar, instale as dependências necessárias usando o npm. Execute os seguintes comandos no terminal:
```bash
npm install express express-handlebars body-parser sequelize sqlite3 
```
 
###  Instalação do Nodemon

O Nodemon é uma ferramenta que ajuda a desenvolver aplicativos baseados em Node.js reiniciando automaticamente o aplicativo quando alterações de arquivos no diretório são detectadas. Para instalar o Nodemon, execute:
```bash
npm install -D nodemon
```

Em seguida, altere o arquivo `package.json` para adicionar um script que usa o Nodemon:
```json
  "scripts": {
    "dev": "nodemon app.js"
  },

```

Agora, você pode iniciar o servidor usando:
```bash
npm run dev
```

Caso você deseja instalar os pacotes e dependências do projeto:
```bash
npm install
```


## Projeto com Estrutura MVC em Node.js: Organização de Diretórios

Este projeto segue a arquitetura MVC (Model, View, Controller) para organizar e modularizar o código, tornando-o mais fácil de entender, manter e escalar. A estrutura de diretórios é projetada de acordo com as melhores práticas de desenvolvimento.

| Diretório   | Descrição  | 
|-------------- | ----------------------------------------------------------------------------------------------------------- |
| controllers | Gerenciam o fluxo de informações entre o frontend e o backend, realizando chamadas aos serviços.           |
| models      | Responsáveis pela construção dos objetos que representam os dados manipulados pela aplicação.             |
| routes      | Definem as rotas da aplicação, especificando como as requisições HTTP são tratadas e direcionadas.       |
| services    | Encapsulam a lógica de negócios da aplicação, realizando operações específicas nos dados.                |
| views       | Contêm as páginas do frontend que consomem os dados fornecidos pelo backend, apresentando-os ao usuário. |


#### controllers

Os arquivos no diretório `controllers` são responsáveis por gerenciar o fluxo de informações entre o frontend e o backend. Eles realizam a chamada dos serviços (localizados em `services`), que por sua vez utilizam os endpoints da API para obter ou manipular os dados necessários para alimentar a aplicação frontend.

#### models

O diretório `models` contém os arquivos responsáveis pela construção dos objetos que representam os dados manipulados pela aplicação. Esses modelos são construídos a partir dos dados recebidos nas requisições à API, com o objetivo de organizar e estruturar os dados de forma coesa.

#### routes

As rotas da aplicação são definidas no diretório `routes`. Elas especificam como as requisições HTTP são tratadas e direcionadas para os controladores adequados. Essas rotas são o ponto de entrada para a lógica de negócios da aplicação.

#### services

Os serviços, localizados no diretório `services`, encapsulam a lógica de negócios da aplicação. Eles são responsáveis por realizar operações específicas nos dados, como buscar informações do banco de dados, processar dados de entrada e executar operações de negócio complexas.

#### views

No diretório `views`, estão localizadas as páginas do frontend que consomem os dados fornecidos pelo backend. Aqui, as informações recebidas das requisições são apresentadas ao usuário de forma agradável e compreensível.

### Padrões de Nomenclatura

- __Idioma Padrão__: O idioma padrão das classes, funções e variáveis é o inglês, seguindo as melhores práticas de desenvolvimento.

- __Nome dos Arquivos em CamelCase__: Os nomes dos arquivos MVC são escritos em CamelCase para garantir consistência e clareza no código. Por exemplo, `SearchTitleController.js`, `MovieTitleModel.js`, etc.


## Criando Banco de Dados

O banco de dados é uma peça fundamental em muitos projetos de software, incluindo aplicações web e móveis. Ele é responsável por armazenar, organizar e gerenciar os dados utilizados pela aplicação. Existem vários tipos de banco de dados, cada um com suas próprias características e casos de uso específicos.

### Conceitos Básicos

- __Dados__: São informações armazenadas em um banco de dados, organizadas em tabelas e representadas por registros.

- __Tabela__: Estrutura fundamental de um banco de dados relacional, composta por linhas (registros) e colunas (campos). Cada tabela representa uma entidade específica, como usuários, produtos, pedidos, etc.

- __Registro__: Também conhecido como linha, é uma entrada em uma tabela que contém dados sobre uma única instância da entidade representada pela tabela.

- __Campo__: Também conhecido como coluna, é uma categoria de dados em uma tabela que contém informações específicas sobre cada registro.

### Configuração do Sequelize

O Sequelize é um ORM (Object-Relational Mapping) para Node.js, que facilita a interação com o banco de dados SQL. Primeiro, configure a conexão com o banco de dados em um arquivo `db.js`:


```js
const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    {
        dialect: 'sqlite',
        storage: './db/app.db'
    }
)

module.exports = sequelize
```

Em seguida, teste a conexão com o banco de dados:
```js
// db connection
db
    .authenticate()
    .then(() => {
        console.log('Conectou ao banco com sucesso')
    })
    .catch(err => {
        console.log('Ocorreu um erro ao conectar', err)
    })

```

### Configurando o Banco de Dados

Para visualizar e manipular o banco de dados SQLite, você pode usar o [DB Browser](https://sqlitebrowser.org/). Abra o arquivo do banco de dados do projeto (`./db/app.db`) no DB Browser e crie uma tabela para armazenar os detalhes das oportunidades de emprego.

<p align="center">
    <img src="/assets/ProjectNode/dbbrowser.png" width="480" height="320">
</p>

<p align="center">
    <img src="/assets/ProjectNode/dbbrowser_table.png" width="480" height="320">
</p>


## Criando um Model

Um model no Sequelize é uma abstração da tabela do banco de dados. Ele define a estrutura e os campos da tabela. Por exemplo, o model para uma oportunidade de emprego (`Job`) pode ser definido da seguinte forma:

```js
const Sequelize = require('sequelize')
const db = require('../db/connection')

const Job = db.define('job',{
    title: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    salary: {
        type: Sequelize.STRING,
    },
    company: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    new_job: {
        type: Sequelize.INTEGER,
    },
})

module.exports = Job
```

## Configurando Rotas

No Express, as rotas são usadas para determinar como o aplicativo responde a uma solicitação do cliente em um determinado endpoint. Para manter o código organizado e modular, é comum agrupar rotas relacionadas usando roteadores.

### Definindo Rotas

Em um arquivo separado, como `routes/jobRoutes.js`, você pode definir as rotas para manipular as oportunidades de emprego. Por exemplo:

```js
const express = require('express')
const router = express.Router()

const Job = require('../models/Job')

// rota de teste
router.get('/test', (req, res) => {
    res.send('deu certo');
  });

// add job via post
router.post('/add', (req, res) => {

    let {title, salary, company, description, email, new_job} = req.body
    
  // insert
  Job.create({
    title,
    description,
    salary,
    company,
    email,
    new_job
  })
  .then(() => res.redirect('/'))
  .catch(err => console.log(err));

})

module.exports = router
```

### Utilizando os Roteadores no App Principal

No arquivo principal do aplicativo, como `app.js`, você pode usar esses roteadores definidos para manipular as requisições HTTP. Por exemplo:

```js
const bodyParser = require('body-parser')

// routes
app.get('/', (req, res) => {
    res.send('Está funcionando !!')
})


//Jobs routes 
app.use('/jobs', require('./routes/jobs'))
```

## Post JSON no Banco de Dados com POSTMAN

Para inserir dados no banco via POST com JSON, siga estes passos no Postman:

- Selecione o método `POST` na barra de ferramentas do Postman.
- Insira a URL da sua API que lida com o POST. Por exemplo, `http://localhost:3000/api/jobs`
- Na aba `Params`, adicione uma nova chave `Content-Type` com o valor `application/json`. Isso indica que o corpo da sua requisição é um objeto JSON.
- Na aba `Body`, selecione raw e insira os dados que você deseja enviar em formato JSON. Por exemplo:

```json
{
  "title": "Desenvolvedor Node.js",
  "description": "Responsável pelo desenvolvimento de novas funcionalidades...",
  "salary": "5000",
  "company": "Tech Ltda",
  "email": "rh@techltda.com",
  "new_job": 1
}
```

Pressione o botão Send para enviar a requisição.
A imagem abaixo ilustra como configurar o Postman para enviar um JSON ao seu servidor:

<p align="center">
    <img src="/assets/ProjectNode/dbbrowser_json.png" width="480" height="320">
</p>

## BootStrap

O Bootstrap é um framework front-end que ajuda a criar interfaces de usuário responsivas e móveis rapidamente. Para utilizá-lo, inclua os links CDN do Bootstrap no seu arquivo HTML.


```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job Finder</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
```

Isso garantirá que seu projeto tenha um design atraente e responsivo sem muito esforço.

## Criando view com HandleBars

Handlebars é uma engine de template que permite criar páginas HTML dinâmicas com facilidade. Para configurá-lo no Express:

- Instale o `express-handlebars` com o comando `npm install express-handlebars`.

- Configure o Express para usar o Handlebars como sua view engine

```js
const exphbs = require('express-handlebars');
const path = require('path');
```

```js
// Configuração do Handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Pasta estática
app.use(express.static(path.join(__dirname, 'public')))
```
Isso permite que você use o Handlebars para renderizar suas views, organizando melhor o projeto e facilitando a manutenção do código.

## Routes para a outra aba

Para adicionar uma nova página ou aba no seu aplicativo, crie uma nova rota. Por exemplo, para adicionar uma página que permite adicionar novas oportunidades de emprego:


```js
router.get('/add', (req, res) => {
  res.render('add')
})
```

## Filtros

A rota do Express serve tanto para exibir todos os empregos quanto para filtrar esses empregos com base em um termo de busca. Ela verifica a presença de um parâmetro de consulta, realiza a busca apropriada no banco de dados, e envia os resultados para uma view que irá exibi-los para o usuário.

Esse padrão é bastante útil para implementar funcionalidades de busca em aplicações web, permitindo uma navegação mais eficiente e direcionada aos interesses do usuário

```js
const Job = require('./models/Job')

// routes
app.get('/', (req, res) => {

    let search = req.query.job;
    let query  = '%'+search+'%'; // PH -> PHP, Word -> Wordpress, press -> Wordpress
  
    if(!search) {
      Job.findAll({order: [
        ['createdAt', 'DESC']
      ]})
      .then(jobs => {
    
        res.render('index', {
          jobs
        });
    
      })
      .catch(err => console.log(err));
    } else {
      Job.findAll({
        where: {title: {[Op.like]: query}},
        order: [
          ['createdAt', 'DESC']
      ]})
      .then(jobs => {
        console.log(search);
        console.log(search);
    
        res.render('index', {
          jobs, search
        });
    
      })
      .catch(err => console.log(err));
    }
})

```