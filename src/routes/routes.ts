import { Router } from "express"
import { ControllerTurma } from '../controllers/controllerTurma'
import { ControllerRecesso } from '../controllers/controllerRecesso'

const rotas = Router()

rotas.get("/", (request, response) => {
  return response.json("home page")
})

//Turma
rotas.get("/turma", new ControllerTurma().readAll)
rotas.post("/turma", new ControllerTurma().create)
rotas.get("/turma/:id_turma", new ControllerTurma().readOne)
rotas.put("/turma/:id_turma", new ControllerTurma().update)
rotas.delete("/turma/:id_turma", new ControllerTurma().delete)

//Recesso
rotas.get("/recessos", new ControllerRecesso().readAll)
rotas.post("/recessos", new ControllerRecesso().create)
rotas.get("/recessos/:id_recesso", new ControllerRecesso().readOne)
rotas.put("/recessos/:id_recesso", new ControllerRecesso().update)
rotas.delete("/recessos/:id_recesso", new ControllerRecesso().delete)

export default rotas