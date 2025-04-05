const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const authenticateToken = async (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization;
  const tokenFromHeader = authHeader && authHeader.split(" ")[1];
  const tokenFromBody = req.body.token;
  const tokenFromQuery = req.query.token;
  token = tokenFromHeader || tokenFromBody || tokenFromQuery;
  console.log(token,"tokenn");
  // Check if Authorization header exists and starts with "Bearer"
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Extract token from the Authorization header
      token = req.headers.authorization.split(" ")[1];

      // Verify and decode token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded, "decode");
      // Fetch user by ID (excluding password)
      req.user = await userModel.findById(decoded._id).select("-password");

      if (!req.user) {
        res.status(404);
        throw new Error("User not found");
      }

      // Proceed to the next middleware
      next();
    } catch (error) {
      console.error("Token verification error:", error.message);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }
};

module.exports = authenticateToken;
