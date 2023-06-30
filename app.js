const express = require("express");
const morgan = require("morgan");

const moviesRouter = require("./routes/movies");

const app = express();

// PART MIDDLEWARE
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// PART ROUTES
app.use("/api/movies", moviesRouter);
app.use(express.static("public"));

module.exports = app;
