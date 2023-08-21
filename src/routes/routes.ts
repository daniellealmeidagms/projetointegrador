import { Router } from "express"
import { ControllerCurso } from '../controllers/controllersCurso'

const rotas = Router()
rotas.get("/", (request, response) => {
  return response.json("hone page")
})
rotas.get("/cursos", new ControllerCurso().readAll)
rotas.get("/cursos", new ControllerCurso().create)
rotas.get("/cursos", new ControllerCurso().readOne)
rotas.get("/cursos", new ControllerCurso().update)
rotas.get("/cursos", new ControllerCurso().delete)
export default rotas