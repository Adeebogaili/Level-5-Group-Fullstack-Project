const express = require("express")
const productRouter = express.Router()
const Product = require("../models/Product")

// Get All
productRouter.get("/", (req, res, next) => {
    Product.find((err, product) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(product)
    })
})

// Post 
productRouter.post("/", (req, res, next) => {
    const newproduct = new Product(req.body)
    newproduct.save((err, savedproduct) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedproduct)
    })
})

module.exports = productRouter