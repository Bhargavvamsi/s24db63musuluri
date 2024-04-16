const mongoose = require("mongoose")
const mineralsSchema = mongoose.Schema({
Mineral_name: String,
Color: String,
Hardness_level: {
    type: Number,
    min: [1, "Hardness_level must be at least 1"],
    max: [10, "Hardness_level cannot be greater than 10"]
  }
})
module.exports = mongoose.model("minerals", 
mineralsSchema)