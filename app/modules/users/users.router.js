const router = require('express').Router();


const listUsers = require('./get_users/get_users.controller');
const listUser = require('./get_user/get_user.controller');
const addUser = require('./add_user/add_user.controller');
const updateUser = require('./update_user/update_user.controller');
const listUsersValidate = require('./get_users/get_users.validators');
const listUserValidate = require('./get_user/get_user.validator');
const addUserValidate = require('./add_user/add_user.validator');
const UpdateUserValidate = require('./update_user/update_user.validator');


module.exports = () => {
    router.route('/api/users')
        .get(listUsersValidate, listUsers)
        .post(addUserValidate, addUser);


    router.route('/api/users/:id')
        .get(listUserValidate, listUser)
        .put(UpdateUserValidate, updateUser);

    return router;
};