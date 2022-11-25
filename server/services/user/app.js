const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const pgp = require("pg-promise")(/* options */);
const db = pgp(
  "postgres://postgres:QNJ5j76djhN8WhDm@db.kegkriwnpgzuvjxhcfmu.supabase.co:5432/postgres"
);

// QNJ5j76djhN8WhDm
app.get("/", (_, res) => {
  res.status(200).json({ msg: "user service", PORT });
});

app.get("/users", (_, res) => {
  db.query("SELECT * FROM users")
    .then((data) => {
      res.status(200).json({ users: data });
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
});

app.listen(PORT, () => {
  console.log("server is running on PORT: ", PORT);
});
