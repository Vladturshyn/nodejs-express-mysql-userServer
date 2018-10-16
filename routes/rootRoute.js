const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const initController = require('../controllers/initController');
const subjectController = require('../controllers/subjectController');

const User = require('../model/userModel');

//init route
router.get('/user/init', initController.init);
//subject route
router.get('/subject', subjectController.findAll);

router.get('/user', userController.listAll);
router.post('/user', userController.save);
router.delete('/user/:id',userController.deleteOne);
router.put('/user/:id', userController.updateOne);
router.get('/user/:id',userController.listOne );

module.exports = router;