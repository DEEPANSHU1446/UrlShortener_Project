const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/route");
const app = express();

app.use(express.json());

let url =
  "mongodb+srv://tannmayhedau619:Tanmay%40619@cluster0.fw1xhuw.mongodb.net/group25Database";
let port = process.env.PORT || 3000;

mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

// app.use((req, res, next) => {
//   res.status(400).send({ status: false, error: "Enter proper Url" });
// });

app.use("/*" ,(req,res) => {
  res.status(400).send({ status: false, error: "Enter proper Url" });
});

app.listen(port, function () {
  console.log("Express app running on port " + port);
});
