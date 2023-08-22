import {Router} from "express"
import { ControllerUnidade } from '../controllers/controllersUnidade'

const rotas = Router()
rotas.get("/",(request, response)=> {
  return response.json ("home page")
})
rotas.get("/unidades", new ControllerUnidade().readAll)
rotas.post("/unidades", new ControllerUnidade().create)
rotas.get("/unidade/:id_unidades", new ControllerUnidade().readOne)
rotas.put("/unidade/:id_unidades", new ControllerUnidade().update)
rotas.delete("/unidade/:id_unidades", new ControllerUnidade().delete)


export default rotas