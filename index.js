var express = require('express');
var app = express();

app.get('/', function (req, res){
    res.send('Hello World! Im here!');
});

app.listen(3000, function(){
    console.log('NACS on 3000');
});