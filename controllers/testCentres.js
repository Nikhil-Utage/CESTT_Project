import testCentres from "../models/testCentres.js";

const advantages = [
  "Fast order processing",
  "Experienced staff providing support and guidance.",
  "Flexible scheduling options to suit your preferences.",
  "Email confirmations and Instructions reminders will be sent.",
  "Select Your Desired Test Dates and Locations.",
];
const staticData =
  "<b>To obtain a CSCS Card, you are required to complete the CITB Health, Safety, and Environment test. Here are the details</b>:<ol><li>Test Duration: The test lasts for 45 minutes.</li><li>Format: It is a multiple-choice test consisting of 50 questions.</li><li>Passing Score: You need to score at least 45 out of 50 to pass.</li><li>Availability: The CITB test can be taken nationwide at over 150 test centres.</li><li>Passing this test demonstrates your commitment to safety and sets you on the path to a successful construction career.</li></ol><h1>Identification Document Requirements</h1><p>All identification documents presented by the candidate must meet the following criteria:</p><br>Originals Only: Photocopies or digital copies are not accepted.<br>Current and Valid: The documents must be in date (not expired) when provided.<br>Matching Names: The documents' names must match those on the test booking.<br>Note: If the candidate’s name has changed since the ID document was issued, they must provide additional original evidence to show a clear link between the previous name and the current name. Acceptable documents include<ul><li>Marriage or civil partnership certificate</li><li>Decree absolute or decree nisi papers</li><li>Deed poll</li><h2>Primary ID Requirements</h2><p>Candidates are required to provide one form of Primary ID. The Primary ID must include the candidate’s full name, a recognizable photograph, and a signature. </p><br><b>Acceptable forms of Primary ID are:</b><br>Passport: Either UK or International<br>Driving Licence: Either UK or European<br>Biometric Residence Permit (BRP) or Biometric Residence Card (BRC): These can be used as primary ID only if they include a signature<br><br>Please ensure that the provided ID meets all these criteria to be accepted.";

const allTestCentres = async (req, res) => {
  try {
    const data = await testCentres.find({});
    res.status(200).send({
      msg: "All Test Centres",
      data: data,
      advantages: advantages,
      staticData: staticData,
    });
  } catch (err) {
    console.log(err.message);
    res.send(500).send({
      msg: "Internal Server Error",
    });
  }
};

const getTestCentre = async (req, res) => {
  const query = req.query.query;
  if (!query) {
    res.status(400).send({
      msg: "No search query found",
    });
  }
  try {
    const results = await testCentres.find({
      $or: [
        { Name: { $regex: query, $options: "i" } },
        { city: { $regex: query, $options: "i" } },
        { postcode: { $regex: query, $options: "i" } },
      ],
    });

    res.status(200).send({
      msg: "All the test centres related to your query",
      data: results,
      advantages: advantages,
      staticData: staticData,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({
      msg: "Internal Server Error",
    });
  }
};
const getParticularTestCentre = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send({ msg: "No Test Centre Found" });
  }
  try {
    const results = await testCentres.findOne({ _id: id });
    res
      .status(200)
      .send({
        msg: "Test Centre",
        data: results,
        advantages: advantages,
        staticData: staticData,
      });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: "Internal Server Error" });
  }
};
export { allTestCentres, getTestCentre, getParticularTestCentre};
