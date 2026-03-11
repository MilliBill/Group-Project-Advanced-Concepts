const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use("/", express.static("public"));

app.get("/api/venues", (req, res) => {
  fs.readFile("./stores.json", "utf8", (err, data) => {
    if (err) {
      console.error("Could not read stores.json:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
