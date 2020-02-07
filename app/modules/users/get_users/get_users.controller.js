const { listUsersQuery } = require('./get_users.query');
const { validationResult } = require('express-validator')

const listUsers = async(req, res) => {
    try {
        const resu = validationResult(req);
        if (resu.isEmpty())
            return res.send(resu)


        const result = await listUsersQuery();
        if (!result) res.status(200).send('No records found')
        res.send(result);

    } catch (e) {
        res.send({ status: 400, error: true });
    }
}

module.exports = listUsers;