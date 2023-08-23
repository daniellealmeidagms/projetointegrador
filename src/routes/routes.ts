import { Router, response } from "express"
import { ControllerUnidade } from "../controllers/controllerUnidade"

const rotas = Router()

rotas.get("/", (request, response) => {
  return response.json("home page")
})

rotas.get("/unidades", new ControllerUnidade().readAll)
rotas.post("/unidades", new ControllerUnidade().create)
rotas.get("/unidades/:id_unidade", new ControllerUnidade().readOne)
rotas.put("/unidades/:id_unidade", new ControllerUnidade().update)
rotas.delete("/unidades/:id_unidade", new ControllerUnidade().delete)
rotas.get("/unidade/horarios/:carga_horaria_unidade", new ControllerUnidade().filterTime)
rotas.get("/unidades/fk_curso", new ControllerUnidade().filterCurso)
export default rotas
