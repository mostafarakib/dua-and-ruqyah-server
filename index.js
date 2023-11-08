const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const duaDb = require("./db/duas");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 5000;

app.get("/duaCategory", async (req, res) => {
  try {
    const duaCategory = await duaDb.getAllDuaCategory();
    res.status(200).json({ duaCategory });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/duaSubCategory/:categoryId", async (req, res) => {
  const id = req.params.categoryId;
  try {
    const subCategory = await duaDb.getSubcategoriesByCategoryId(id);
    res.status(200).json({ subCategory });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/dua/:subcategoryId", async (req, res) => {
  const id = req.params.subcategoryId;
  try {
    const duas = await duaDb.getDuasBySubcategoryId(id);
    res.status(200).json({ duas });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/test", (req, res) => {
  res.status(200).json({ success: true });
});

app.listen(port, () => console.log("server is running on port", port));
