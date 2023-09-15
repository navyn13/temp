const express = require('express');
const router = express.Router()
const productController = require('../controller/product')


router
.get('/', productController.getProducts)
.get('/:id',productController.getProduct)
.post('/', productController.insertProduct)
.put('/:id', productController.replaceProduct)
.patch('/:id', productController.updateProduct)
.delete('/:id', productController.deleteProduct)

exports.router= router