import { Router } from "express"
import { controllerCurso } from "../controllers/controllersCurso"

const rotas = Router()

rotas.get("/", (request, response) => {
  return response.json("home page")
})

rotas.get("/curso", new controllerCurso().readAll)
rotas.post("/curso", new controllerCurso().create)
// rotas.get("/curso/:id_curso", new controllerCurso().readOne)
rotas.put("/curso/:id_curso", new controllerCurso().update)
rotas.delete("/curso/:id_curso", new controllerCurso().delete)
rotas.get("/curso/:eixo", new controllerCurso().filterEixo)
rotas.get("/curso/:modalidade", new controllerCurso().filterModalidade)

export default rotas
