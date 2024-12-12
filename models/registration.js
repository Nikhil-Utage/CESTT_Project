import mongoose from "mongoose";
import mongooseSequence from "mongoose-sequence";

const AutoIncrement = mongooseSequence(mongoose);

const registrationSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  testCentre: {
    type: String,
  },
  metadata:{
    type:String
  },
  leadGenerated:{
    type:Boolean
  }
});

registrationSchema.plugin(AutoIncrement, {
  id: "order_seq",
  inc_field: "id",
  start_seq: 1000,
});

const Registration = mongoose.model("Registration", registrationSchema);

export default Registration;
