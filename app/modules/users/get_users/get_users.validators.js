 const { param } = require('express-validator')
 const listUsersValidate = [
     param()
     .isEmpty()
 ]
 module.exports = listUsersValidate;