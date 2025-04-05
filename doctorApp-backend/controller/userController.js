const userModel = require("../models/userModel.js");

module.exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, address, gender, dob, phone } = req.body;

    // Validate required fields
    if (!name || !email || !password   || !phone) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    console.log(name, email, password, dob, gender, "sign-up");
    // Hash the password
    const hashedPassword = await userModel.hashPassword(password);

    // Create a new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      address,
      gender,
      dob,
      phone,
    });

    await newUser.save();

    
      const token = newUser.generateAuthToken();

      res.status(200).json({
        success: true,
        message:"User registered successfully",
        token,
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        },
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Login a user
module.exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Validate required fields
    if (!password || !email) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    // Check if the user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Compare the password
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    // Generate a token
    const token = user.generateAuthToken();

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports.getUser = async (req, res) => {
  try {
    // Find the user by ID decoded from the JWT
    const user = await userModel.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return user data (you can customize the fields to return)
    res.status(200).json({
      // id: user._id,
      // name: user.name,
      // email: user.email,
      // image: user.image,
      user: user,
      // Example: Add any additional fields
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.updateProfile = async (req, res) => {
  try {
    const { name, phone, address, gender, dob } = req.body;

    // Find user by ID
    const user = await userModel.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update fields
    if (name) user.name = name;
    if (phone) user.phone = phone;
    if (address) user.address = address;
    if (gender) user.gender = gender;
    if (dob) user.dob = dob;

    // Save updated user
    await user.save();

    res.json({ message: "Profile updated successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}