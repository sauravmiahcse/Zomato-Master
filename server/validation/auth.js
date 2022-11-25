import joi from "joi";

export const ValidateSignup = (userData) => {
  const Schema = joi.object({
    fullName: joi.string().required().min(5),
    email: joi.string().email().required(),
    password: joi.string(),
    address: joi
      .array()
      .items(joi.object({ details: joi.string(), for: joi.string() })),
    phoneNumber: joi.number(),
  });

  return Schema.validateAsync(userData);
};

export const ValidateSignin = (userData) => {
  const Schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  });

  return Schema.validateAsync(userData);
};
