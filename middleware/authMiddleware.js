
const jwt = require("jsonwebtoken");
const config = require("../utils/config");

const auth = (req, res, next) => {
   const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token missing or malformed" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch(err) {
    // console.log(err)
    res.status(401).json({ message: "Invalid token" });
  }
};


const admin = (req, res, next) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ message: "Admin access required" });
  }
  next();
};


module.exports = {auth, admin};
