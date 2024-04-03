const mongoose = require("mongoose")
const mineralsSchema = mongoose.Schema({
Mineral_name: String,
Color: String,
Hardness_level: Number
})
module.exports = mongoose.model("minerals", 
mineralsSchema)