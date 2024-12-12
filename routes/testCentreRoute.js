import express from "express";
import {
  allTestCentres,
  getTestCentre,
  getParticularTestCentre,
} from "../controllers/testCentres.js";
const Router = express.Router();

Router.route("/getalltestcentres").get(allTestCentres);

Router.route("/searchtestcentre").get(getTestCentre);

Router.route("/searchtestcentre/:id").get(getParticularTestCentre);

export default Router;
