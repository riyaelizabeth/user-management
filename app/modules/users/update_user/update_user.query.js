const { User } = require('../../../../db/models/User')


const updateUserQuery = async(id, newUser) => {
    console.log("in query")

    return User.findByIdAndUpdate({ _id: id }, {
            $set: {
                name: newUser.name,
                age: newUser.age
            }

        }


    );


}

module.exports = { updateUserQuery };