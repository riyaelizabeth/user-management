const { User } = require('../../../../db/models/User')


const addUserQuery = async(userDetails) => {
    const newuser = new User({
        name: userDetails.name,
        age: userDetails.age
    })
    console.log("jk")
    return newuser.save();

}
module.exports = addUserQuery;