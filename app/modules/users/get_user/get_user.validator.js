const { param } = require('express-validator');

const listUserValidate = [
    param('id')
    .isHexadecimal().withMessage("Not in required format")
    .isLowercase()
]

module.exports = listUserValidate;