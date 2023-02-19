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




module.exports = essentialsRouter