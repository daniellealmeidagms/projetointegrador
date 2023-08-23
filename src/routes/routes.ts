import { Router, response } from "express"
import { ControllerRecesso } from "../controllers/controllerRecesso"

const ROTAS = Router()

ROTAS.get("/", (request, response) => {
  return response.json("homepage")
})

ROTAS.get("/recessos", new ControllerRecesso().readAll)
ROTAS.post("/recessos", new ControllerRecesso().create)
ROTAS.get("/recessos/:id_recesso", new ControllerRecesso().readOne)
ROTAS.put("/recessos/:id_recesso", new ControllerRecesso().update)
ROTAS.delete("/recessos/:id_recesso", new ControllerRecesso().delete)
ROTAS.get("/recessos/data/:data_recesso", new ControllerRecesso().filterDate);

export default ROTAS
