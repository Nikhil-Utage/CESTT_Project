import express from "express";
const router = express.Router();
import { createNewTicket } from "../controllers/contact.js";
import { validateTicket } from "../validation/ticketValidation.js";

router.route("/createnewsupporticket").post(validateTicket, createNewTicket);

export default router;
