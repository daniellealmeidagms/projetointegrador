import { Router, response } from 'express';
import { request } from 'http'
import { ControllerRecesso } from '../controllers/controllersRecesso'

const ROTAS = Router()

ROTAS.get("/", (request,response) => {
  return response.json("home page")
})


ROTAS.get("/recessos", new ControllerRecesso().readAll)
ROTAS.post("/recessos", new ControllerRecesso().create)
ROTAS.get("/recessos/:id_recesso", new ControllerRecesso().readOne)
ROTAS.put("/recessos/:id_recesso", new ControllerRecesso().update)
ROTAS.delete("/recessos/:id_recesso", new ControllerRecesso().delete)


export default ROTAS