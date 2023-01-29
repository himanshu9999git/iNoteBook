const jwt = require("jsonwebtoken");
const JWT_SECRET = "TooFarForRonaldoToThinkAboutIt!!!Ohhhh!!!"

const fetchuser = (req, res, next) => {
  const token = req.header("authtoken");
  if (!token) {
    res.status(401).send({ error: "Invalid Token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Invalid Token" });
  }
};

module.exports = fetchuser;
