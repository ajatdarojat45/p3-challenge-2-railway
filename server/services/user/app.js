const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (_, res) => {
  res.status(200).json({ msg: "user service" });
});

app.listen(PORT, () => {
  console.log("server is running on PORT: ", PORT);
});
