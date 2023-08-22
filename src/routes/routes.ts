import { Router } from "express"
import { ControllerRecesso } from '../controllers/controllerRecesso'

const rotas = Router()

rotas.get("/", (request, response) => {
  return response.json("home page")
})

//Recesso
rotas.get("/recessos", new ControllerRecesso().readAll)
rotas.post("/recessos", new ControllerRecesso().create)
rotas.get("/recessos/:id_recesso", new ControllerRecesso().readOne)
rotas.put("/recessos/:id_recesso", new ControllerRecesso().update)
rotas.delete("/recessos/:id_recesso", new ControllerRecesso().delete)

export default rotas

