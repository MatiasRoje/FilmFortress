const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A movie must have a title"],
    unique: true,
    trim: true,
  },
  overview: {
    type: String,
    required: [true, "A movie must have an overview"],
  },
  backdropPath: {
    type: String,
    required: [true, "A movie must have a backdrop path"],
  },
  posterPath: {
    type: String,
    required: [true, "A movie must have a poster path"],
  },
  releaseDate: {
    type: Date,
    required: [true, "A movie must have a release date"],
  },
  voteAverage: {
    type: Number,
    required: [true, "A movie must have a vote average"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
