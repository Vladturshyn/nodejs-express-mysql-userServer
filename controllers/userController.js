const userController = {};

const User = require('../model/userModel');

userController.listAll = (req,res) =>{
    User.find()
    .then(user => {
        res.json(user);
    })
    .catch(err => console.log(err));
}

userController.save = (req,res) =>{
    const data = {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    };

    User.create(data)
        .then(data => res.json(data))
        .catch(err=> console.log(err));
}

userController.deleteOne = (req,res) =>{
    User.findByIdAndDelete(req.params.id)
        .then(()=>{
            res.json({data: true})
        })
        .catch((err)=>res.json(err));
}

userController.updateOne = (req,res) =>{
    User.findByIdAndUpdate( req.params.id ,{ name: req.body.name, email: req.body.email },{ new: true })
    .then(user => {
        if(err) {
            res.status(400).json(err);
        }
        res.json({success: true});
    })
    .catch(err=> res.json(err))
}

userController.listOne = (req,res) =>{
    User.findById(req.params.id)
        .then(user => {
            if(user) res.json(user);
            if(!user) res.json({err: 'not found'});
        })
        .catch(err=> res.json(err));
}

module.exports = userController;