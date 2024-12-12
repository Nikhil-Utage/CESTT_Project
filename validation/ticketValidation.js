import Joi from "joi";

const contactSchema = Joi.object({
  name: Joi.string().min(1).required(),
  email: Joi.string().email().required(),
  mobile: Joi.string()
    .pattern(/^(0?[123789]\d{8,9})$/)
    .required(),
  query: Joi.string().optional(),
});

const validateTicket = (req, res, next) => {
  const { error } = contactSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res
      .status(400)
      .send({ error: error.details.map((e) => e.message).join(", ") });
  }
  next();
};

export { validateTicket };
