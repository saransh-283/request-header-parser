const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors({ optionSuccessStatus: 200 }));

app.use(express.static("public"));

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/hello", (req, res) => {
  res.json({ greeting: "hello API" });
});

app.get("/api/whoami", (req, res) => {
  let myIP = req.header("X-Forwarded-For").split(",")[0];
  let myLanguage = req.header("Accept-Language");
  let mySystem = req.header("User-Agent");
  res.json({
    ipaddress: myIP,
    language: myLanguage,
    software: mySystem,
  });
});

app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`);
});
