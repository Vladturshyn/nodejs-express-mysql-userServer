const mongoose = require('mongoose'), Schema = mongoose.Schema;

const SubjectSchema = mongoose.Schema({
    name: String	
});

module.exports = mongoose.model('Subject', SubjectSchema);