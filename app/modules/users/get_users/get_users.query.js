const { User } = require('../../../../db/models/User');

const listUsersQuery = async() => {
    return User.find();
};


module.exports = {
    listUsersQuery
};