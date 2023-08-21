import { response } from 'express'
import { request } from 'http'
import { rootCertificates } from 'tls'

import {Router} from "express"
import { ControlerAula } from '../controllers/ControllerAula'

const rotas = Router()

rotas.get("/",(request, response)=>{
  return response.json("home page")
})
rotas.get("/aula", new ControlerAula().readAll)
rotas.post("/aula", new ControlerAula().create)
rotas.get("/aula/:id_aula", new ControlerAula().readOne)
rotas.put("/aula/:id_aula", new ControlerAula().update)
rotas.delete("/aula/:id_aula", new ControlerAula().delete)

export default rotas