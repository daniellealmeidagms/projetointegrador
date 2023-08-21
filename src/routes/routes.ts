
import { Router, response } from 'express'
import { ControllerAula } from '../controllers/controllersAula'

const rotas = Router()

rotas.get("/", (request, response) => {
  return response.json("home page")
})

export default rotas

//Aula

rotas.get("/aula", new ControllerAula().readAll)
rotas.post("/aula", new ControllerAula().create)
rotas.get("/aula/:id_aula", new ControllerAula().readOne)
rotas.put("/aula/:id_aula", new ControllerAula().Update)
rotas.delete("/aula/:id_aula", new ControllerAula().delete)