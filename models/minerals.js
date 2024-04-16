const mongoose = require("mongoose")
const mineralsSchema = mongoose.Schema({
  Mineral_name: {
    type: String,
    required: [true, "Mineralname is required"],
    minlength: [4, "Mineralname should be at least 4 characters long"],
    maxlength: [9, "Mineralname should be less than 8 characters long"]
  },
  Color: {
    type: String,
    required: [true, "Color is required"]
  },
Hardness_level: {
    type: Number,
    required: [true, "Mineralname is required"],
    min: [1, "Hardness_level must be at least 1"],
    max: [10, "Hardness_level cannot be greater than 10"]
  }
})
module.exports = mongoose.model("minerals", 
mineralsSchema)