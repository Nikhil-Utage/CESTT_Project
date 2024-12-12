import Joi from "joi";

const userSchema = Joi.object({
  name: Joi.string().min(3).max(255).required(),
  email: Joi.string().min(10).required(),
  mobile: Joi.string()
    .pattern(/^(0?[123789]\d{8,9})$/)
    .required(),
  testCentre: Joi.string().min(3).optional(),
  metadata: Joi.string().min(0).required(),
});

const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body, { abortEarly: 20 });
  if (error) {
    return res
      .status(400)
      .send({ error: error.details.map((e) => e.message).join(",") });
  } else {
    next();
  }
};




export { validateUser };
