module.exports = function(app) {
    app.use("/es-es/mc/:id", function(req, res){
        var id = req.params.id;
        res.render(id+".pug");
    });
};