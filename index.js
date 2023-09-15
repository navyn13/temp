
const express = require('express');
const server = express();

server.use(express.json());
const productRouter= require('./routes/product')
server.use('/products', productRouter.router)

//////////////////////////////////////////////


server.listen(8080, ()=>{
    console.log('server OK started')
}) 