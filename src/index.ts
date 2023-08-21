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
//Aula
rotas.get("/Aula", new ControlerAula().readAll)
rotas.post("/Aula", new ControlerAula().create)
rotas.get("/Aula/:id_aulas",new ControlerAula().update)
rotas.delete("/Aula/:id_aula",new ControlerAula().delete)