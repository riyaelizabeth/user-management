const { User } = require('../../../../db/models/User');
const listUserQuery = async(id) => {
    return User.findById(id).select('_id name age');
}

module.exports = {
    listUserQuery
};