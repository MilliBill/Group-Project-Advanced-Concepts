const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/", express.static("public"));

// THIS IS GRADE 3 - REST API to get stores
app.get("/api/venues", (req, res) => {
  fs.readFile("./stores.json", "utf8", (err, data) => {
    if (err) {
      console.error("Could not read stores.json:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    const stores = JSON.parse(data);
    res.json(stores);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running`);
  console.log("Hitta din butik här :): http://localhost:3000/api/venues");
});
