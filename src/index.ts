import { AppDataSource } from "./databases/datasource"
import rotas from './routes/routes'

AppDataSource.initialize().then()
console.log("Database connected!")
const express = require("express")
const app = express()
app.use(express.json())
app.use(rotas)

app.listen(3333, () => console.log("O server tá ON na porta 3333"))