const colorette = require("colorette");
const findNotReturnedBook = require("../services/findNotReturnedBook")

async function connectToAtlas() {
  const mongoose = await require("mongoose");
  mongoose.set("strictQuery", false);
  //* mongoose.connect(urlParam,{options to resolve depricated warninigs })
  let a = await mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(colorette.bold(`Success ${colorette.bgGreen(colorette.white(" Database "))} Connected ✔️`));
      findNotReturnedBook()
    })
    .catch((error) => {
      console.log(error.message);
      process.exit(1);
    });
}

module.exports = connectToAtlas;

//? useCase direction
// const connectDB = require('./configs/database');
// const DATABASE_URL = process.env.DATABASE_URL;
// connectDB(DATABASE_URL);
