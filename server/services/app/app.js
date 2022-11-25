const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => {
  res.status(200).json({ msg: "app service" });
});

app.listen(PORT, () => {
  console.log("server is running on PORT: ", PORT);
});
