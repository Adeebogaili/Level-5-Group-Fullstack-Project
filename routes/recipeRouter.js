const express = require("express")
const recipeRouter = express.Router()
const recipe = require("../models/Recipe")

// Get all Essentails
recipeRouter.get("/", (req, res, next) => {
    recipe.find((err, recipe) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(recipe)
    })
})

// Get one
recipeRouter.get("/:essentialId", (req, res, next) => {
    recipe.findOne({
        _id: req.params.essentialId
    }, (err, foundEssential) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundEssential)
    })
})

// Get by Type
recipeRouter.get("/search/type", (req, res, next) => {
    recipe.find(
        {type: req.query.type}, 
        (err, recipe) => {
            if(err){
                res.status(500)
                return next(200)
            }
            return res.status(200).send(recipe)
        }
    )
})

// Poste one
recipeRouter.post("/", (req, res, next) => {
    const newEssential = new recipe(req.body)
    newEssential.save((err, savedEssential) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedEssential)
    })
})

// Delete one 
recipeRouter.delete("/:essentialId", (req, res, next) => {
    recipe.findOneAndDelete(
        {_id: req.params.essentialId},
        (err, deletedEssential) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`You have successfully deleted ${deletedEssential.name} from the database`)
        })
})

// Update one 
recipeRouter.put("/:essentialId", (req, res, next) => {
    recipe.findOneAndUpdate(
        {_id: req.params.essentialId}, // find this one to update
        (req.body), // update the object
        {new: true}, // send back the updated version
        (err, updatedEssential) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedEssential)
        }
    )
})

module.exports = recipeRouter