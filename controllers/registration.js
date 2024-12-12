import register from "../models/registration.js";
import axios from "axios";
import { sendMail } from "./functions/functions.js";

const registerNewUser = async (req, res) => {
  const { name, email, testCentre,mobile, metadata } = req.body;
  // if (!name || !mobile || !email || !testCentre) {
  //   res.status(400).send({
  //     msg: "Name or mobile or email or testCentre missing. Please try again",
  //   });
  // }
  try {
    let leadGenerationResponse, response
    try{
      leadGenerationResponse = await axios.post(
        "https://crm.rannlab.com/apikey/authenticate_api_key",
        {
          name: name,
          mobile: mobile,
          email: email,
          source: "website",
          metatag: metadata
        },
        {
          headers: {
            "X-API-KEY": "469dd762752e6c536d2ac5734fc7db3a",
            "X-SECRET-KEY": "b333b4972f122cef13a886b9140c8f95c7c85c461da1388839d01cdd562698f3",
            "Content-Type": "application/json"
          }
        }
      );
      response = await register.create({
        name: name,
        mobile: mobile,
        email: email,
        testCentre: testCentre,
        metadata: metadata,
        leadGenerated:true
      });
    }catch(err){
      // console.log(err)
      if (err.response) {
        console.log("Lead Generation Error:", err.response.data.error);
      } else {
        console.log("Lead Generation Error:", err.message);
      }
      response = await register.create({
        name: name,
        mobile: mobile,
        email: email,
        testCentre: testCentre,
        metadata: metadata,
        leadGenerated:false
      });
    }finally{
      let mailData = `Dear ${name},\n\nYour registration for CIBT Test was successful!\n\n Below are your registeration details:\n Name: ${name}\nMobile Number: ${mobile}\nEmail address: ${email}\n \n Thanks for registeration!\n\n\nRegards,\nCESTT Team`;
      await sendMail(email, mailData);
      res.status(200).send({
        msg: "User Successfully registered",
        id: response.id,
      });
      
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send({
      msg: "Internal Server Error",
    });
  }
};

export { registerNewUser };
