const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  // other properties...
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
