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

##  Configurando o Banco de Dados

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
