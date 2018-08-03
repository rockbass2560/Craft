var mongoose = require("mongoose");

var schema_record = new mongoose.Schema({
    evaluacion : Number,
    time : Number,
    name : String,
    age : Number,
    gen : String,
    photos : Array,
    happy : Number,
    sad : Number,
    angry : Number,
    fear : Number,
    frustration : Number,
    boredom : Number,
    chain_answer : String,
    chain_level : String,
    gain : Number,
    level_dificulty : Number,
    codecolor : Number,
    namecolor : String,
    soundnumber : Number
});

module.exports = mongoose.model("Record",schema_record,"Record");