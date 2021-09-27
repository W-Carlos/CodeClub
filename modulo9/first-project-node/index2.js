/*
    - Query Params ⇒ meusite.com/users?name=wendcarlos&age=25  
    - Route params ⇒ /users/2 
        - Buscar, Deletar ou Atualizar Especifíco
    - Request Body => {"name": "Carlos", "age": 25}

    - GET         => Buscar informações no back-end
    - POST        => Criar informações no back-end
    - PUT / PATCH => Alterar/Atualizar informações no back-end
    - DELETE      => Deletar informações no back-end

    - Middlewares => INTERCEPTADOR => Tem o poder de parar ou alterar dados de requisição
*/

// Importando uma biblioteca
const { request, response } = require('express')
const express = require('express')

//Usando o express
const app = express()
const port = 3000
app.use(express.json())

/* Criando rota */
/*
 //Query params
 app.get('/users', (request, response) => {
    //const name = request.query.name
    //const age = request.query.age

    const {name, age} = request.query // Destructuring assignment. Forma mais resumida.

    return response.json({name, age} )
})*/

// Route params
/*
app.get('/users/:id', (request, response) => {
    const {id} = request.params

    console.log(id)

    return response.json({id})
})
*/

// Request Body
app.get('/users', (request, response) => {

    const {name, age} = request.body

    return response.json({name, age})
})

//Porta pra abrir o projeto
app.listen(port, () => {
    console.log(`🚀Server started on port ${port}`)
})