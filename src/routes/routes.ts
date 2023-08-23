import { Router } from "express"
import { ControllerTurma } from "../controllers/controllerTurma"
import { ControllerRecesso } from "../controllers/controllerRecesso"
import { ControllerUnidade } from "../controllers/controllersUnidade"

const rotas = Router()

rotas.get("/", (request, response) => {
  return response.json("home page")
})

//Turma
rotas.get("/turmas", new ControllerTurma().readAll)
rotas.post("/turmas", new ControllerTurma().create)
rotas.get("/turmas/:id_turma", new ControllerTurma().readOne)
rotas.put("/turmas/:id_turma", new ControllerTurma().update)
rotas.delete("/turmas/:id_turma", new ControllerTurma().delete)

//Recesso
rotas.get("/recessos", new ControllerRecesso().readAll)
rotas.post("/recessos", new ControllerRecesso().create)
rotas.get("/recessos/:id_recesso", new ControllerRecesso().readOne)
rotas.put("/recessos/:id_recesso", new ControllerRecesso().update)
rotas.delete("/recessos/:id_recesso", new ControllerRecesso().delete)

// Unidade
rotas.get("/unidades", new ControllerUnidade().readAll)
rotas.post("/unidades", new ControllerUnidade().create)
rotas.get("/unidades/:id_unidades", new ControllerUnidade().readOne)
rotas.put("/unidades/:id_unidades", new ControllerUnidade().update)
rotas.delete("/unidades/:id_unidades", new ControllerUnidade().delete)
rotas.get("/unidades/horario/:carga_horaria_unidade", new ControllerUnidade().filterTime)
rotas.get("/unidades/cursos/:fk_curso",new ControllerUnidade().filterCurso)

export default rotas
