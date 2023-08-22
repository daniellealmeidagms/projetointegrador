import { request } from 'http'
import { AppDataSource } from './databases/datasource'
import ROTAS from './routes/routes'

AppDataSource.initialize().then()
console.log("DataBase Connected")

const express = require("express")
const app = express()

app.use(express.json())
app.use(ROTAS)
app.listen(3333,()=>console.log(" the servers on in port 3333"))