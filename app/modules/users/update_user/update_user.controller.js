const { updateUserQuery } = require('./update_user.query');
const { validationResult } = require('express-validator')

const updateUser = async(req, res) => {
    try {
        const validation = validationResult(req)
        if (!validation.isEmpty())
            return res.send(validation)

        console.log("validated")
        const result = await updateUserQuery(req.params.id, req.body);
        console.log("gotin")
        return res.send(result)
    } catch (e) {
        res.send({ status: 400, error: true });
    }

    // app.put('/api/users/:id', async(req, res) => {

    //     const updatinguser = await User.findById(req.params.id)

    //     const abc = await User.update({ _id: req.params.id }, {
    //         $set: {
    //             name: req.body.name,
    //             age: req.body.age

    //         }
    //     })
    //     res.send(abc)
};

module.exports = updateUser;