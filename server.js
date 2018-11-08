const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const user = require('./routes/rootRoute');

// connect to db
 const db = "*";
 mongoose
   .connect(db,{ useNewUrlParser: true })
   .then(()=>{console.log('connected to Mongo succsess')})
   .catch(()=>{console.log('erorr')});

app.use('/', user);

const port = process.env.PORT || 4000;

app.listen(port, console.log(`Server running on port ${port}`));