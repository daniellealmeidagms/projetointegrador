import { Controleraula } from './controllers/controlleraula'
import { AppDataSource } from "./databases/datasource"
AppDataSource.initialize().then()
import rotas from "./routes/routes"
console.log("Database connected !")

const express = require("express")
const app = express()
app.use(express.json())
app.use(rotas)
app.listen(3333, () => console.log("O server esta ONDELINE  na porta 3333. "))
//aula
rotas.get("/aula", new Controleraula().readAll)
rotas.post("/aula", new Controleraula().create)
rotas.get("/aula/:id_aulas",new Controleraula().update)
rotas.delete("/aula/:id_aula",new Controleraula().delete)