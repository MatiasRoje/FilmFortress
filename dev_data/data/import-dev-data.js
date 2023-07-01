const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Movie = require("./../../models/movie");
const _ = require("lodash");

dotenv.config({ path: "./.env" });

// Function to convert the all keys from the JSON document to the
// camelCase formar typical of JS
function convertKeysToCamelCase(obj) {
  if (Array.isArray(obj)) {
    return obj.map(v => convertKeysToCamelCase(v));
  } else if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [_.camelCase(key)]: convertKeysToCamelCase(obj[key]),
      }),
      {},
    );
  }
  return obj;
}

const DB = process.env.MONGODB_URI;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection succesful!"));

// Read JSON FILE
const movies = convertKeysToCamelCase(
  JSON.parse(fs.readFileSync(`dev_data/data/movies-simple.json`, "utf-8")),
);

// Import data into DB
const importData = async () => {
  try {
    await Movie.create(movies);
    console.log("Data succesfully loaded!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// Delete all data from DB
const deleteData = async () => {
  try {
    await Movie.deleteMany();
    console.log("Data succesfully deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
