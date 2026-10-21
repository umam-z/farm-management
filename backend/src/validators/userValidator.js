const Joi = require("joi");

const createUserSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    "string.base": "Nama harus berupa teks",
    "string.min": "Nama minimal harus 3 karakter",
    "any.required": "Nama wajib diisi",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Format email tidak valid",
    "any.required": "Email wajib diisi",
  }),
});

module.exports = {
  createUserSchema,
};
