const express = require('express');
const app = express();
const port = 8082;
app.get('/', function(req, res) {
    res.send("Hello Express!");
});
// Starting the server, callback can be omitted
app.listen(port, function() { 
    console.log("Server is started on port" + port)
});