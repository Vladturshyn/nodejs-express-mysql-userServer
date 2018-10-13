const express = require('express');
const router = express.Router();
const userController = require('../controlers/userController');

const User = require('../model/userModel');

router.get('/user', userController.listAll);
router.post('/user', userController.save);
router.delete('/user/:id',userController.deleteOne);
router.put('/user/:id', userController.updateOne);
router.get('/user/:id',userController.listOne );

module.exports = router;