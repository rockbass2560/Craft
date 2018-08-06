var mongoose = require("mongoose");

var personaSchema = new mongoose.Schema({
    id : Number,
    name : String,
    age : Number,
    gen : String,
});

module.exports = mongoose.model("Persona",personaSchema,"Persona");