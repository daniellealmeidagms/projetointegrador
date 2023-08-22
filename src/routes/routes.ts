import { Router } from "express"
import { ControllerTurma } from '../controllers/controllerTurma'

const rotas = Router ()

rotas.get("/", (request, response) => {
  return response.json("home page")
})

//Turma
rotas.get("/turma", new ControllerTurma().readAll)
rotas.post("/turma", new ControllerTurma().create)
rotas.get("/turma/:id_turma", new ControllerTurma().readOne)
rotas.put("/turma/:id_turma", new ControllerTurma().update)
rotas.delete("/turma/:id_turma", new ControllerTurma().delete)

export default rotas
