const express = require("express");
require("dotenv").config();
const { sendLibraryFineEmail } = require("./SESmailer");
const app = express();
const { cronService } = require("./cronjob-utility/cronService");
const connectToAtlas = require("./config/connectDB");
const findNotReturnedBook = require("./services/findNotReturnedBook")
connectToAtlas();

const PORT = 5100;

// cronService("*/1 * * * *", () => {
//   sendLibraryFineEmail(100);
// });

// cronService("*/2 * * * *", () => {
//   sendLibraryFineEmail(200);
// });

app.get("/", (req, res) => {

  res.status(200).json({
    success: true,
    data: {
      msg: "Entry point",
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
