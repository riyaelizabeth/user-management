const addUserQuery = require('./add_user.query')
const { validationResult } = require('express-validator')
const addUser = async(req, res) => {
    try {
        let resu = validationResult(req);
        if (!resu.isEmpty())
            return res.send(resu)
        const result = await addUserQuery(req.body);


        return res.send(result);
    }
    //     console.log(result);
    catch (e) {
        res.send({ status: 400, error: true });
    }


}



//     const newuser = new User({
//         name: req.body.name,
//         age: req.body.age
//     });


//     User = await newuser.save();
//     res.send(User);


module.exports = addUser;