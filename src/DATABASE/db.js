const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://pitlawark:Kanchan#123@cluster0.18jghhj.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
