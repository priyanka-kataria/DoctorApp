const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  let token;

  // Check if the Authorization header exists and starts with "Bearer"
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Extract the token from the Authorization header
      token = req.headers.authorization.split(" ")[1];

      // Verify and decode the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Check if the decoded token contains the expected admin email
      if (decoded.email !== process.env.ADMIN_EMAIL) {
        return res.status(401).json({ message: "Not authorized, invalid token" });
      }
      
      // Add the decoded data to the request object for further use
      req.user = decoded;

      next();
    } catch (error) {
      console.error("Token verification error:", error.message);
      res.status(401).json({ message: "Not authorized, token verification failed" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token provided" });
  }
};

module.exports = { protect };
