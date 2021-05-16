const express = require("express");

const app = express();
app.use(express.json());

app.get("/projects", (request, response) => {
  const { title } = request.query; //Desestruturação protege o usuário de manipular o endpoint.
  console.log(title);
  return response.json(["Projeto 1", "Projeto 2", "Projeto 3"]);
});

//Exemplo post

app.post("/projects", (request, response) => {
  const body = request.body;
  console.log(body);
  return response.json(["Projeto 1", "Projeto 2", "Projeto 3", "Projeto 4"]);
});

//Exemplo put, alteraçao de um elemento na API

app.put("/projects/:id", (request, response) => {
  const { id } = request.params; // desestrutura pois pode passar mais de um parâmetro ao mesmo tempo
  console.log(id);
  return response.json(["Projeto 5", "Projeto 2", "Projeto 3", "Projeto 4"]);
});

//Exemplo delete

app.delete("/projects", (request, response) => {
  return response.json(["Projeto 5", "Projeto 2", "Projeto 4"]);
});

app.listen(3333, () => {
  console.log("Backend Started!");
});
