import { AppDataSource } from "./databases/datasource"
import rotas from "./routes/routes"

AppDataSource.initialize().then()
console.log("Database Connected")

const express = require("express")
const app = express()
app.use(rotas)

app.listen(3333, () => console.log("O Server está online na porta 3333."))
