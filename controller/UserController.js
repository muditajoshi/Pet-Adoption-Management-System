const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt= require("bcryptjs")

const register = async (req, res) => {
  const { email, name, password } = req.body;
  if (!email || !name || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ name, email, password: hashedPassword });

  res.status(201).json({ message: "User registered successfully" });
};

const login = async (req, res) => {
  const { email, password } = req.body;
if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }
  const user = await User.findOne({email:email});
  if (!user) return res.status(404).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token });
};

module.exports = { register, login };
