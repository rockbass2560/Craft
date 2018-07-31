module.exports = function(app) {
    app.use("/levels/:id", function(req, res){
        var id = req.params.id;
        res.render(id+".pug");
    });
};