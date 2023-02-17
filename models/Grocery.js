const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Grocery Blueprint

const grocerySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Grocery", grocerySchema)