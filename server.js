//Dependendencia commonjs
const express = require('express');

//crear el objeto app
const app = express();

//primera prueba de url del servidor 
app.get('/prueba' , function(request , response){
    response.send("Holaaaa");
});

///uris de bootscamps
//traer todos los bootcamps
app.get('/api/v1/devcamp/bootcamps',
        (request, response)=>{
       response
               .status(200)
               .json({
                     "success" : true,
                     "msg" : "mostrar todos los bootscamps"
       
             })
})

//traer todos los bootcamps con id
app.get('/api/v1/devcamp/bootcamps/:id',
        (request, response)=>{
       response
               .status(200)
               .json({
                     "success" : true,
                     "msg" : ` seleccionando bootcamp con id ${request.params.id}`
       
             })
})

//crear todos los bootcamps
app.post('/api/v1/devcamp/bootcamps',
        (request, response)=>{
       response
               .status(201)
               .json({
                     "success" : true,
                     "msg" : "creando bootscamps"
       
             })
})

//actualizar todos los bootcamps con id
app.put('/api/v1/devcamp/bootcamps/:id',
        (request, response)=>{
       response
               .status(200)
               .json({
                     "success" : true,
                     "msg" : ` actualizando bootcamp con id ${request.params.id}`
       
             })
})

//eliminar todos los bootcamps con id
app.del('/api/v1/devcamp/bootcamps/:id',
        (request, response)=>{
       response
               .status(200)
               .json({
                     "success" : true,
                     "msg" : ` eliminando bootcamp con id ${request.params.id}`
       
             })
})

///evidencia: uris de curses 
//traer todos los curses
app.get('/api/v1/devcamp/curses',
        (request, response)=>{
       response
               .status(200)
               .json({
                     "success" : true,
                     "msg" : "mostrar todos los curses"
       
             })
})


//traer todos los curses con id
app.get('/api/v1/devcamp/curses/:id',
        (request, response)=>{
       response
               .status(200)
               .json({
                     "success" : true,
                     "msg" : ` seleccionando curses con id ${request.params.id}`
       
             })
})

//crear todos los curses
app.post('/api/v1/devcamp/curses',
        (request, response)=>{
       response
               .status(201)
               .json({
                     "success" : true,
                     "msg" : "creando curses"
       
             })
})

//actualizar todos los curses con id
app.put('/api/v1/devcamp/curses/:id',
        (request, response)=>{
       response
               .status(200)
               .json({
                     "success" : true,
                     "msg" : ` actualizando curses con id ${request.params.id}`
       
             })
})

//eliminar todos los curses con id
app.del('/api/v1/devcamp/curses/:id',
        (request, response)=>{
       response
               .status(200)
               .json({
                     "success" : true,
                     "msg" : ` eliminando curses con id ${request.params.id}`
       
             })
})



///evidencia: uris para reviews
//traer todos los reviews
app.get('/api/v1/devcamp/reviews',
        (request, response)=>{
       response
               .status(200)
               .json({
                     "success" : true,
                     "msg" : "mostrar todos los reviews"
       
             })
})


//traer todos los reviews con id
app.get('/api/v1/devcamp/reviews/:id',
        (request, response)=>{
       response
               .status(200)
               .json({
                     "success" : true,
                     "msg" : ` seleccionando reviews con id ${request.params.id}`
       
             })
})

//crear todos los reviews
app.post('/api/v1/devcamp/reviews',
        (request, response)=>{
       response
               .status(201)
               .json({
                     "success" : true,
                     "msg" : "creando reviews"
       
             })
})

//actualizar todos los reviews con id
app.put('/api/v1/devcamp/reviews/:id',
        (request, response)=>{
       response
               .status(200)
               .json({
                     "success" : true,
                     "msg" : ` actualizando reviews con id ${request.params.id}`
       
             })
})

//eliminar todos los reviews con id
app.del('/api/v1/devcamp/reviews/:id',
        (request, response)=>{
       response
               .status(200)
               .json({
                     "success" : true,
                     "msg" : ` eliminando reviews con id ${request.params.id}`
       
             })
})


///evidencia: uris para users 
//traer todos los users
app.get('/api/v1/devcamp/users',
        (request, response)=>{
       response
               .status(200)
               .json({
                     "success" : true,
                     "msg" : "mostrar todos los users"
       
             })
})


//traer todos los users con id
app.get('/api/v1/devcamp/users/:id',
        (request, response)=>{
       response
               .status(200)
               .json({
                     "success" : true,
                     "msg" : ` seleccionando users con id ${request.params.id}`
       
             })
})

//crear todos los users
app.post('/api/v1/devcamp/users',
        (request, response)=>{
       response
               .status(201)
               .json({
                     "success" : true,
                     "msg" : "creando users"
       
             })
})

//actualizar todos los users con id
app.put('/api/v1/devcamp/users/:id',
        (request, response)=>{
       response
               .status(200)
               .json({
                     "success" : true,
                     "msg" : ` actualizando users con id ${request.params.id}`
       
             })
})

//eliminar todos los users con id
app.del('/api/v1/devcamp/users/:id',
        (request, response)=>{
       response
               .status(200)
               .json({
                     "success" : true,
                     "msg" : ` eliminando users con id ${request.params.id}`
       
             })
})

 
//establecer servidor
const PUERTO = 4500;

app.listen(PUERTO,
           console.log("Servidor escuchando en el puerto:" + PUERTO));