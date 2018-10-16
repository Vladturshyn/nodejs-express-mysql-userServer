const Subject = require('../model/subjectModel');
const subjectController = {};

subjectController.findAll = (req, res) => {
	Subject.find()
    .then(subjects => {
        res.send(subjects);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

module.exports = subjectController;