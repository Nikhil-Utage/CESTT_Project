import Contact from "../models/contactUs.js";

const createNewTicket = async (req, res) => {
  try {
    const response = await Contact.create(req.body);

    res.status(200).send({
      msg: "Thank you for your request; one of our experts will be in touch shortly.",
      ticketId: response.ticketId,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({
      msg: "Internal Server Error",
    });
  }
};

export { createNewTicket };
