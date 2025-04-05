const DoctorModel = require("../models/doctorModel");

module.exports.changeAvailability = async (req, res) => {
  try {
    const { docId } = req.body;

    const docData = await doctorModel.findById(docId);
    await doctorModel.findByIdAndUpdate(docId, { available: !docData.available });
    res.json({ success: true, message: "Availability Changed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

module.exports.doctorList=async(req,res)=>{


   try {
    const doctors= await doctorModel.find({}).select(['-password','-email']);
    res.json({ success: true, message: "doctor list fetched succesfully" });
    
   } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
   }


}

