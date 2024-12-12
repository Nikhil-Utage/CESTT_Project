import mongoose from "mongoose";
import mongooseSequence from "mongoose-sequence";

const AutoIncrement = mongooseSequence(mongoose);

const schema = mongoose.Schema;

const contactSchema = schema({
  ticketId: {
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
  query: {
    type: String,
  },
});

contactSchema.plugin(AutoIncrement, {
  ticketId: `order_seq`,
  inc_field: `ticketId`,
  start_seq: 10000,
});
const Contact = mongoose.model("contact-us", contactSchema);

export default Contact;
