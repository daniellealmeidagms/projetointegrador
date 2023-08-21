import { Router, response } from 'express';
import { request } from 'http'
import { ControllerUnidade } from '../controllers/controllerUnidade'

const rotas = Router()

rotas.get("/",(request, response) =>{
  return response.json("home page")
})

rotas.get("/unidades", new ControllerUnidade().readAll)
rotas.post("/unidades", new ControllerUnidade().create)
rotas.get("/unidades/:id_unidade", new ControllerUnidade().readOne)
rotas.put("/unidades/:id_unidade", new ControllerUnidade().update)
rotas.delete("/unidades/:id_unidade", new ControllerUnidade().delete)

export default rotas