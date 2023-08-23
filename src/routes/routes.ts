import { Router, response } from "express"
import { ControlerAula } from "../controllers/controllerAula"
const rotas = Router()
rotas.get("/", (request, response) => {
  return response.json("home page")
})
rotas.get("/aula", new ControlerAula().readAll)
rotas.post("/aula", new ControlerAula().create)
rotas.get("/aula/:id_aula", new ControlerAula().readOne)
rotas.put("/aula/:id_aula", new ControlerAula().update)
rotas.delete("/aula/:id_aula", new ControlerAula().delete)
rotas.get("/aula/data/:data_aula", new ControlerAula().filter_data_aula)
rotas.get("/aula/:fk_turma", new ControlerAula().filter_turma)
rotas.get("/aula/:status_aula", new ControlerAula().filter_status)

export default rotas
