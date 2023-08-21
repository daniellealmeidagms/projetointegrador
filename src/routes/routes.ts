import { Router } from "express"
import { ControllerUnidade } from '../controllers/controllersunidade'

const rotas = Router()

rotas.get("/", (request, response) => {
  return response.json("home page")
})


//recesso
rotas.get("/unidade", new ControllerUnidade().readAll)
rotas.post("/unidade", new ControllerUnidade().create)
rotas.get("/unidade/:id_unidade", new ControllerUnidade().readOne)
rotas.put("/unidade/:id_unidade", new ControllerUnidade().update)
rotas.delete("/unidade/:id_unidade", new ControllerUnidade().delete)

export default rotas
