const { param, body } = require('express-validator');

const updateUserValidate = [
    param('id')
    .isHexadecimal()
    .isLowercase(),


    body('name')
    .isLength({ min: 3, max: 10 }).withMessage("Length not satisfied"),
    body('age')
    .isInt({ min: 5, max: 100 }).withMessage("Not a number"),
    body()
    //.isJSON().withMessage("Not in json format")
]



module.exports = updateUserValidate;