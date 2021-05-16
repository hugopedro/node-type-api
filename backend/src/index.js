const express = require("express");

const app = express();

app.get("/projects", (request, response) => {
  return response.json(["Projeto 1", "Projeto 2", "Projeto 3"]);
});

//Exemplo post

app.post("/projects", (request, response) => {
  return response.json(["Projeto 1", "Projeto 2", "Projeto 3", "Projeto 4"]);
});

//Exemplo put, alteraçao de um elemento na API

app.put("/projects", (request, response) => {
  return response.json(["Projeto 5", "Projeto 2", "Projeto 3", "Projeto 4"]);
});

//Exemplo delete

app.delete("/projects", (request, response) => {
  return response.json(["Projeto 5", "Projeto 2", "Projeto 4"]);
});

app.listen(3333, () => {
  console.log("Backend Started!");
});
