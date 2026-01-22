const express = require("express");
const path = require("path");

const app = express();

// 🔹 avisa que existe uma pasta pública
app.use(express.static("public"));


app.use(express.static(path.join(__dirname, "front-end")));

// 🔹 rota principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "front-end", "index.html"));
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
