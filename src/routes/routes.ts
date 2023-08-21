import { Router } from "express"
import { controllerCurso } from '../controllers/controllersCurso'

const rotas = Router()

rotas.get("/", (request, response) =>{
    return response.json("home page")
})

rotas.post("/curso", new controllerCurso().readAll)
rotas.post("/curso", new controllerCurso().create)
rotas.post("/curso/:id_curso", new controllerCurso().readOne)
rotas.post("/curso/:id_curso", new controllerCurso().update)
rotas.post("/curso/:id_curso", new controllerCurso().delete)

export default rotas 