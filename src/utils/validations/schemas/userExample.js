const joi = require('joi');

const userIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}&/);
const firstNameSchema = joi.string().max(80).regex(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/).message('That doesnt looks like a name, if you think its an error please contact with an administrator.');
const emailSchema = joi.string().max(80).regex(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/).message('That doesnt looks like a valid email');
const passwordSchema = joi.string().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/).message('Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter and one number');

const createUserSchema = {
    name: firstNameSchema.required(),
    email: emailSchema.required(),
    password: passwordSchema.required()
};

const updateUserSchema = {
    name: firstNameSchema,
    email: emailSchema,
    password: passwordSchema
}

module.exports = {
    userIdSchema, 
    createUserSchema,
    updateUserSchema,
};