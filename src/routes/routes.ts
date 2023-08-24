import { Router } from "express"

import { ControllerTurma } from "../controllers/controllerTurma"

const rotas = Router()

rotas.get("/", (request, response) => {
  return response.json("home page")
})

//Recesso
rotas.get("/turmas", new ControllerTurma().readAll)
rotas.post("/turmas", new ControllerTurma().create)
// rotas.get("/turma/id_turma", new ControllerTurma().readOne)
rotas.put("/turmas/id_turma", new ControllerTurma().update)
rotas.delete("/turmas/id_turma", new ControllerTurma().delete)
rotas.get("/turmas/turno", new ControllerTurma().filterTurno)

export default rotas
