const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    //validation
    if (!name || !email || !password) {
      return res.status(404).send({
        success: false,
        message: "please fill the all fields",
      });
    }

    if (password.length < 6) {
      return res.status(404).send({
        success: false,
        message: "password more than 6 character ",
      });
    }

    //existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(500).send({
        success: true,
        message: "User already exists",
      });
    }
    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashedPassword: ", hashedPassword);
    //save user
    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    //success message
    return res.status(201).json({
      message: "registered succesfully",
      newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error in register API",
      error,
    });
  }
};

const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(500).send({
        success: false,
        message: "please provide email and password",
      });
    }
    //find user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(500).send({
        success: false,
        message: "User not found",
      });
    }

    //match password

    if (user && (await bcrypt.compare(password, user.password))) {
      // jwt token
      const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      user.password = undefined;
      res.status(200).send({
        success: true,
        message: "login successfully",
        token,
        user,
      });
    } else {
      return res.status(500).send({
        success: false,
        message: "invalid user name or password", 
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error in login API",
      error,
    });
  }
};

const resetPasswordController = async (req, res, next) => {
  try {
    const { email, newPassword } = req.body;

    // Validation
    if (!email || !newPassword) {
      return res.status(400).json({ success: false, message: "Please provide email and new password" });
    }

    // Check if the user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({ success: true, message: "Password reset successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Error in resetting password", error });
  }
};

module.exports = {
  resetPasswordController,
};
module.exports = {
  registerController,
  loginController,
  resetPasswordController,
};
