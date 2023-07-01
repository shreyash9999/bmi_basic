const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
})

app.post('/',function(req,res){
var height = Number(req.body.height);
var weight = Number(req.body.weight);
 var result = weight/height;
 res.send("My Bmi is "+result);
});

app.listen(3003,function(){
    console.log("server up at 3003");
});
