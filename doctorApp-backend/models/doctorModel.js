const mongoose=require('mongoose')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: {
      type: String,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    speciality: { type: String, required: true },
    degree: { type: String, required: true },
    experience: { type: String, required: true },
    about: { type: String, required: true },
    available: { type: Boolean, required: true },
    fees: { type: Number, required: true },
    address: { type: Object, required: true },
    // date: { type: Number, required: true },
    slots_booked: { type: Object, default: {} },
  },{ minimize: false }
);

doctorSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};
doctorSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

doctorSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};
const DoctorModel = mongoose.model("doctor", doctorSchema);

module.exports=DoctorModel;
