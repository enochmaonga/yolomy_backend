const express = require('express')
const router = express.Router();
//product model
const product = require('../model/product');

//route GET /products
router.get('/', (req, res) =>{
    //fetch all products from the database
    product.find({}, (error, products) =>{
        if (error) console.log(error)
        res.json(products)
    })
})

//route POST /products
//desc create a product
router.post('/', (req, res) =>{
    const newProduct = new product({
        name: req.body.name,
        description: req.body.decription,
        price: req.body.price,
        quantity: req.body.quantity,
    })
    newProduct.save((err, product) =>{
        if(err) console.log(err)
        res.json(product)
    })
})
//@route PUT api/products/:id
//desc update a product in the database
router.put('/:id', (req,re)=>{
    //update a product in the database
product.updateOne({_id:req.params.id}, {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
}, {upsert: true}, (err, product)=>{
    if(err) console.log(err);
    res.json({product})
})
})

//route DELETE api/products/:id
//desc Delete a product
router.delete('/:id', (req,res)=>{
    //delete a product from the database
    product.deleteOne({_id: req.params.id}, (err)=>{
        if(err) {console.log(err)
            res.json({success:fale})
    } else{
        res.json({success:true})
    }   
    })
})

module.exports = router;