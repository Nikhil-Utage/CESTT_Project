import mongoose from "mongoose";

const testCentres = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  addressLine1: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postcode: {
    type: String,
    required: true,
  },
  country:{
    type:String
  },
  directions:{
    type:String
  },
  info:{
    type:String
  },
  phone:{
    type:String
  },
  street:{
    type:String
  },
  iframe:{
    type:String
  }
});

const testCentre = mongoose.model("testCentre", testCentres);

export default testCentre;
