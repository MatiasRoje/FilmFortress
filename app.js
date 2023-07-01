const express = require("express");
const morgan = require("morgan");

const moviesRouter = require("./routes/movies");

const app = express();

// PART MIDDLEWARE
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.static(`${__dirname}/public`));

// PART ROUTES
app.use("/api/movies", moviesRouter);

module.exports = app;
