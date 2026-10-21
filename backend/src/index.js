const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

// Middleware to parse JSON bodies
// app.use(express.json());

// Test route
// app.get("/api/v1", (req, res) => {
//   res.json({ message: "Welcome to the REST API!" });
// });
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
