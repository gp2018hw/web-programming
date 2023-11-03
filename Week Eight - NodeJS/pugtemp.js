let express = require('express');
let app = express();
let help_server = require('./help_pages.js')
const port = 8082;
app.set('view engine', 'pug'); // <-- *** view engine set pug
app.get('/', function(req, res) {   
//    res.send("Welcome to Hello Express");
    res.render('./main_page', {appTitle: 'Hello Express'});
});
app.use('/help', help_server);
app.get('*', function(req, res) {  
    res.send("Page not found in Hello Express!");
});
// app.listen(8082);
app.listen(port, function() { 
    console.log("Server is started on port " + port)
});