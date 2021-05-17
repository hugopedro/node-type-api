const express = require("express");
const { uuid } = require("uuidv4");

const app = express();
app.use(express.json());

const projects = [];

app.get("/projects", (request, response) => {
  return response.json(projects);
});

//Exemplo post

app.post("/projects", (request, response) => {
  const { title, owner } = request.body;
  const id = uuid();
  const project = {
    id,
    title,
    owner,
  };

  projects.push(project);

  return response.json(project);
});

//Exemplo put, alteraçao de um elemento na API

app.put("/projects/:id", (request, response) => {
  const { id } = request.params; // desestrutura pois pode passar mais de um parâmetro ao mesmo tempo
  const { title, owner } = request.body;
  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({
      error: "Project not found.",
    });
  }

  const project = {
    id,
    title,
    owner,
  };

  projects[projectIndex] = project;

  return response.json(project);
});

//Exemplo delete

app.delete("/projects/:id", (request, response) => {
  const { id } = request.params;
  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({
      error: "Project not found.",
    });
  }

  //passa o índice da posição do array e o 1 significa quantos quer excluir.
  projects.splice(projectIndex, 1);

  return response.status(204).json([]);
});

app.listen(3333, () => {
  console.log("Backend Started!");
});
