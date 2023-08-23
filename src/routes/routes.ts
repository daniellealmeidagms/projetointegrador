import { Router, response } from "express"

import { controllerRecesso } from '../controllers/controllerRecesso'
const rotas = Router()

rotas.get("/",(request, response) => {
  return response.json("home page")
})

rotas.get("/recessos", new controllerRecesso().readAll)
rotas.post("/recessos", new controllerRecesso().create)
rotas.get("/recessos/:id_recesso", new controllerRecesso().readOne)
rotas.put("/recessos/:id_recesso", new controllerRecesso().update)
rotas.delete("/recessos/:id_recesso", new controllerRecesso().delete)
rotas.get("/recessos/data/:id_recesso", new controllerRecesso().filtro_data)

export default rotas
