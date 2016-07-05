var express = require('express');
var app = express();

 var app = express();

app.use(express.static(__dirname + '/chartApp'));
 app.listen(3000);
 console.log("Port is running on 3000");