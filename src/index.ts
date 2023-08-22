import { ControlerAula } from './controllers/controllerAula'
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
rotas.get("/aula", new ControlerAula().readAll)
rotas.post("/aula", new ControlerAula().create)
rotas.get("/aula/:id_aulas", new ControlerAula().update)
rotas.delete("/aula/:id_aula", new ControlerAula().delete)