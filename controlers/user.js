const user = require('../userModel');

module.exports.list = (req, res)=>{
    user.apiQuery()
}