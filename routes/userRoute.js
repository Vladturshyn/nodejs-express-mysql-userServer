const express = require('express');
const router = express.Router();

const User = require('../userModel');

router.get('/', (req, res)=>{
    User.find()
        .then(user => {
            res.json(user);
        })
        .catch(err => console.log(err));
});

router.post('/', (req, res)=>{
    const data = {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    };

    User.create(data)
        .then(data => res.json(data))
        .catch(err=> console.log(err));
});

module.exports = router;