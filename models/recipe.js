const mongoose = require("mongoose")
const Schema = mongoose.Schema

// recipe Blueprint

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    details: {
        type: Array
    },
    ingredients: {
        type: Array
    },
    imgUrl: {
        type: String
    },
    type: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Recipe", recipeSchema)