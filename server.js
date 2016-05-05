var express = require('express');
var app = express();
app.use(express.static(__dirname + "../drawworks"));


app.listen(3000);
console.log('Server is running on port 3000');
