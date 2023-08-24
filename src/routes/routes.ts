import { Router } from "express"
import { ControllerCurso } from '../controllers/controllersCurso'

const rotas = Router()
rotas.get("/", (request, response) => {
  return response.json("hone page")
})
rotas.get("/curso", new ControllerCurso().readAll)
rotas.post("/curso", new ControllerCurso().create)
// rotas.get("/curso/:id_curso", new ControllerCurso().readOne)
rotas.put("/curso/:id_curso", new ControllerCurso().update)
rotas.delete("/curso/:id_curso", new ControllerCurso().delete)
rotas.get("/cursos/:eixo", new ControllerCurso().filterEixo)
rotas.get("/cursos/:modalidade", new ControllerCurso().filterModalidade)
export default rotas