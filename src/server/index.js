const express = require('express');
const app = express();
const PORT = 8010;
const bodyParser = require('body-parser');
const path = require('path');
//


// API routes Async
app.use('/static', express.static('./build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//API routes
app.use('/', require('./work-server/work-route'));
// e('/'));

//App Routes
app.use('/',function (req, res) {
    res.sendFile(path.join(__dirname + '/../../build/index.html'));
});

app.listen(PORT, ()=>{
    console.log("Server running on " + PORT);
});