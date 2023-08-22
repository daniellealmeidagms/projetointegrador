import { Router } from "express"
import { ControllerCurso } from '../controllers/controllersCurso'

const rotas = Router()
rotas.get("/", (request, response) => {
  return response.json("hone page")
})
rotas.get("/cursos", new ControllerCurso().readAll)
rotas.post("/cursos", new ControllerCurso().create)
rotas.get("/cursos/:id_curso", new ControllerCurso().readOne)
rotas.put("/cursos/:id_curso", new ControllerCurso().update)
rotas.delete("/cursos/:id_curso", new ControllerCurso().delete)
export default rotas