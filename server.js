// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var pug = require("pug");

// configuration ===========================================
	
// config files
var port = process.env.PORT || 8080; // set our port
mongoose.connect("mongodb://localhost:27017/craft", { useNewUrlParser: true }, function(err){
    if (!err)
        console.log("conectado");
    else{
        console.log("Error: "+err.message);
    }
}); // connect to our mongoDB database (commented out after you enter in your own credentials)

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/site')); // set the static files location /public/img will be /img for users

app.set("views",__dirname +"/site/es-es/views");
app.set("view engine", "html");
app.set("pug", pug.renderFile);

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);
console.log('Servidor corriendo: ' + port); // shoutout to the user
exports = module.exports = app; // expose app