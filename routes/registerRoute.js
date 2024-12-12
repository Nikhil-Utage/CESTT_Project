import express from "express";
import { registerNewUser } from "../controllers/registration.js";
import { validateUser } from "../validation/userValidation.js";
const router = express.Router();

router.route("/registerNewUser").post(validateUser, registerNewUser);

export default router;
