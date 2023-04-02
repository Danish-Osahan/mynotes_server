const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id },"danish3042002", { expiresIn: "1d" });
};

module.exports = generateToken;