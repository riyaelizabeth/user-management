const { listUserQuery } = require('./get_user.query');
const { validationResult } = require('express-validator')

const listUser = async(req, res) => {
    //console.log("in")
    try {
        // console.log("hjhjj")
        let result = validationResult(req);
        if (!result.isEmpty())
            return res.send(result)


        const userdetail = await listUserQuery(req.params.id);

        return res.send(userdetail);
        // 
    } catch (e) {
        return res.send({ status: 400, error: true });
    }
    // }
}
module.exports = listUser;




//app.get('/api/users/:id', async(req, res) => {
//     try {
//         const result = await User.findById(req.params.id).select('_id name age');
//         if (!result)
//             res.send({ status: 200, message: 'No record found' });
//         res.send(result);
//         console.log(result);
//     } catch (e) {
//         res.send({ status: 400, error: true });
//     }
// });