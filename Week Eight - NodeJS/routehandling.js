let express = require('express');
let app = express();
let help_server = require('./help_pages.js')
const port = 8082;
app.get('/', function(req, res) {   
    res.send("Welcome to Hello Express");
});
app.use('/help', help_server);
app.get('*', function(req, res) {  
    res.send("Page not found in Hello Express!");
});
app.listen(port, function() { 
    console.log("Server is started on port " + port)
});