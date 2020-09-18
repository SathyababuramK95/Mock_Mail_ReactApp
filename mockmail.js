const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.static(__dirname + '/public'));
// app.get("/*", function(req, res) {
//     res.sendFile(path.join(__dirname, "index.html"));
//   });
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.use('/', (err,res)=>{

// });
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
// const err = new Error('Not Found');
// err.status = 404;
// next(err);
// });

const port = process.env.port || 3030;
app.listen(port, function(req, res) {
    console.log("Server Started Successfully");
});
    
module.exports = app;