const { validationResult } = require("express-validator");
const DoctorModel = require("../models/doctorModel");
const connecttocloudinary = require("../config/cloudinary.js");
const jwt = require("jsonwebtoken");

module.exports.AddDoctor = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    name,
    email,
    password,
    speciality,
    degree,
    experience,
    about,
    available,
    fees,
    address,
  } = req.body;

  try {
    let doctor = await DoctorModel.findOne({ email });
    if (doctor) {
      return res.status(400).json({ msg: "Doctor already exists" });
    }

    // Hash password
    const hashedPassword = await DoctorModel.hashPassword(password);

    // // Upload image
    // const imageUpload = await connecttocloudinary.uploader.upload(
    //   req.file.path,
    //   function (err, result) {
    //     if (err) {
    //       console.log(err);
    //       return res.status(500).json({
    //         success: false,
    //         message: "Error",
    //       });
    //     }

    //     res.status(200).json({
    //       success: true,
    //       message: "Uploaded!",
    //       data: result,
    //     });
    //   }
    // );

    // const imageUrl = imageUpload.secure_url;

    // Create new doctor
    const newDoctor = await DoctorModel.create({
      name,
      email,
      password: hashedPassword,
      speciality,
      degree,
      experience,
      about,
      available,
      fees,
      address,

    });

    // Generate token
    const token = newDoctor.generateAuthToken();

    res.status(201).json({ doctor: newDoctor, token });
    console.log("Doctor added successfully", newDoctor);
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).send("Server error");
  }
};

module.exports.adminLogin = async (req, res) => {
  try {
    const { password, email } = req.body;

    if (
      password !== process.env.ADMIN_PASSWORD ||
      email !== process.env.ADMIN_NAME
    ) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }else{
        const token = jwt.sign(email+password, process.env.JWT_SECRET);
        res.status(201).json({ token });
    }

  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Server error");   
  }
};
