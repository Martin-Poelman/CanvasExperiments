/**
 * User: Martin
 * Date: 17-2-13
 * Time: 21:02
 */
var express = require("express");
var app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "jade");
app.use(express.logger('dev'));
app.use(express.static(__dirname +"/public"));

app.get('/', function(req, res){
    res.render("content", {title: "First test"});
});

app.listen(3000);
console.log('Listening on port 3000');