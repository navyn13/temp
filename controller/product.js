const fs= require('fs');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;
const index = fs.readFileSync('index.html', 'utf-8');


exports.getProducts = function (req, res){
    res.json(products)
    
}
exports.getProduct = function(req,res){
    const id = +req.params.id;
    const product= products.find(p=>p.id===id)
    res.json(product)
}

exports.insertProduct =  function(req, res){
    console.log(req.body);
    products.push(req.body)
    res.json({type:'POST'})
}

exports.updateProduct = function (req, res){
    const id= +req.params.id;
    const productIndex= products.findIndex(p=>p.id===id);
    const product = products[productIndex];
    products.splice(productIndex, 1, {...product , ...req.body })
    res.status(201).json(req.body);
}

exports.replaceProduct = function (req, res){
    const id= +req.params.id;
    const productIndex= products.findIndex(p=>p.id===id)
    products.splice(productIndex, 1, {id: id, ...req.body })
    res.status(201).json(req.body);
}


exports.deleteProduct = function (req, res){
    const id= +req.params.id;
    const productIndex= products.findIndex(p=>p.id===id);
    const product = products[productIndex];
    products.splice(productIndex,1)
    res.status(201).json();
}
