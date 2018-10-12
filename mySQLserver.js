const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app2 = express();

const connection = mysql.createConnection({
    host     : 'eu-cdbr-west-02.cleardb.net', //mysql database host name
    user     : 'b0ed182fd67118', //mysql database user name
    password : 'ac84ac6f', //mysql database password
    database : 'heroku_46730d7d959b023' //mysql database name
  });

connection.connect(function(err){
    if (err) throw err;
    console.log('connected');
})

const port = process.env.PORT || 4004;

app2.listen(port, console.log(`Server running on port ${port}`));