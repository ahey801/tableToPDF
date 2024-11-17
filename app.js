const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json("This is just a test.");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
