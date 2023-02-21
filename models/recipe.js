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
    old_price: {
        type: Number
    },
    new_price: {
        type: Number
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