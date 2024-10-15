const { Joi, celebrate } = require("celebrate");
const validator = require("validator");

const validateURL = (value, helpers) => {
  if (validator.isURL(value)) {
    return value;
  }
  return helpers.error("string.uri");
};

module.exports.validateClothingItem = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30).messages({
      "string.min": 'The minimum length of the "name" field is 2',
      "string.max": 'The maximum length of the "name" field is 30',
      "string.empty": 'The "name" field must be filled in',
    }),

    imageUrl: Joi.string().required().custom(validateURL).messages({
      "string.empty": 'The "imageUrl" field must be filled in',
      "string.uri": 'the "imageUrl" field must be a valid url',
    }),
  }),
});

module.exports.validateUserInfo = celebrate({
  body: Joi.object().keys({
    username: Joi.string().min(2).max(30).required().messages({
      "string.empty": "Username cannot be empty.",
      "string.min": "Username should have a minimum length of 2 characters.",
      "string.max": "Username should have a maximum length of 30 characters.",
    }),
    avatar: Joi.string().custom(validateURL).required().messages({
      "string.empty": "Avatar cannot be empty.",
      "string.uri": "Avatar must be a valid URL.",
    }),
    email: Joi.string().email().required().messages({
      "string.empty": "Email cannot be empty.",
      "string.email": "Email must be a valid email address.",
    }),
    password: Joi.string().required().messages({
      "string.empty": "Password cannot be empty.",
    }),
  }),
});

module.exports.validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required().messages({
      "string.empty": "Email cannot be empty.",
      "string.email": "Email must be a valid email address.",
    }),
    password: Joi.string().required().messages({
      "string.empty": "Password cannot be empty.",
    }),
  }),
});

module.exports.validateIds = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().length(24).hex().required().messages({
      "string.length": "User ID must be 24 characters long.",
      "string.hex": "User ID must be a valid hexadecimal.",
    }),
    clothingItemId: Joi.string().length(24).hex().required().messages({
      "string.length": "Clothing item ID must be 24 characters long.",
      "string.hex": "Clothing item ID must be a valid hexadecimal."
    }),
  }),
});
