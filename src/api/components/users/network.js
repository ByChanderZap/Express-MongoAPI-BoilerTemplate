const express = require('express');
const router = express.Router();
const { createUserSchema, userIdSchema, updateUserSchema } = require('../../../utils/validations/schemas/userExample'); // eslint-disable-line
const validationHandler = require('../../../utils/middlewares/validationHandler');

router.get('/', (req, res, next) => {
    
    try {
        res.status(200).json({
            Message: "Hello!"
        });
    } catch (error) {
        next(error)
    }
})

//  Example of req.body validation
router.post('/', validationHandler(createUserSchema), (req, res, next) => {
    try {
        res.status(200).json({
            Message: "Ok"
        })
    } catch (error) {
        next(error);
    }
})

module.exports = router;