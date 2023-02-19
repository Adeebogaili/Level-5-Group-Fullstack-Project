const express = require("express")
const essentialsRouter = express.Router()
const Essentials = require("../models/Essentials")

// Get all Essentails
essentialsRouter.get("/", (req, res, next) => {
    Essentials.find((err, essentials) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(essentials)
    })
})

// Get one
essentialsRouter.get("/:essentialId", (req, res, next) => {
    Essentials.findOne({
        _id: req.params.essentialId
    }, (err, foundEssential) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundEssential)
    })
})

// Poste one
essentialsRouter.post("/", (req, res, next) => {
    const newEssential = new Essentials(req.body)
    newEssential.save((err, savedEssential) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedEssential)
    })
})

module.exports = essentialsRouter