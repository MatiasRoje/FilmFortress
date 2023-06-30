const express = require("express");
const app = express();
require("dotenv").config();
require("./config/database");

// Serve static files from the 'public' directory
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
