import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const PORT = 5000;
const DATA_FILE = "./characters.json";

app.use(cors());
app.use(express.json());

const loadData = () => JSON.parse(fs.readFileSync(DATA_FILE));
const saveData = (data) => fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

app.get("/characters", (req, res) => {
  const data = loadData();
  res.json(data.characters);
});

app.get("/characters/:id", (req, res) => {
  const data = loadData();
  const character = data.characters.find(c => c.id == req.params.id);
  if (character) res.json(character);
  else res.status(404).json({ message: "Not found" });
});

app.post("/characters", (req, res) => {
  const data = loadData();
  const newChar = { id: Date.now(), ...req.body };
  data.characters.push(newChar);
  saveData(data);
  res.status(201).json(newChar);
});

app.put("/characters/:id", (req, res) => {
  const data = loadData();
  const idx = data.characters.findIndex(c => c.id == req.params.id);
  if (idx !== -1) {
    data.characters[idx] = { ...data.characters[idx], ...req.body };
    saveData(data);
    res.json(data.characters[idx]);
  } else res.status(404).json({ message: "Not found" });
});

app.delete("/characters/:id", (req, res) => {
  const data = loadData();
  data.characters = data.characters.filter(c => c.id != req.params.id);
  saveData(data);
  res.json({ message: "Deleted" });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
