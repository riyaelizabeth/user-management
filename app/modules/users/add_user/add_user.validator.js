const { body } = require('express-validator');
const addUserValidate = [
    body('name')
    .isLength({ min: 3, max: 100 }).withMessage("Length not satisfied"),
    body('age')
    .isInt({ min: 5, max: 100 }).withMessage("Not a number"),
    body('name')
    .custom((name, { req }) => {
        if (name !== 'Riya')
            throw new Error('Name not acceptable');
        else
        if (age !== 20) throw new Error('Age not acceptable');
        return true;
    })
]

module.exports = addUserValidate;