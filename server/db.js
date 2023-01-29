const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoURI = "mongodb://localhost:27017/iNoteBook";
const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected To Mongo Successfully");
  });
};

module.exports = connectToMongo;
