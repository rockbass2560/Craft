var mongoose = require("mongoose");

var evaluacionSchema = new mongoose.Schema({
    id : Number,
    persona : Number
});

module.exports = mongoose.model("Evaluacion",evaluacionSchema,"Evaluacion");