import { AppDataSource } from "./databases/datasource"
AppDataSource.initialize().then()
console.log("Database conected!")
const express = require("express")
const app = express()
app.use(express.json())
app.listen(3333, () => console.log("servidor ON na porta 3333."))
