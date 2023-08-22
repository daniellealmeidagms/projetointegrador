import { Router, response } from 'express';
import { ControllersTurma } from '../controllers/controllersTurma';

const rotas = Router()
rotas.get("/", (request, response)=>{
  return response.json("home page")
}
)
rotas.post("/turmas", new ControllersTurma().create)
rotas.get("/turmas", new ControllersTurma().readAll)
rotas.get("/turmas/:id_turma", new ControllersTurma().readOne)
rotas.put("/turmas/:id_turma", new ControllersTurma().update)
rotas.delete("/turmas/:id_turma", new ControllersTurma().delete)
export default rotas

