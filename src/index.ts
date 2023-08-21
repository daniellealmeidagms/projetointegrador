import { AppDataSource } from './databases/datasource';
import ROTAS from './routes/routes'


AppDataSource.initialize().then()
console.log("Database Connected")

const express = require("express")
const app = express()
app.use(express.json())
app.use(ROTAS)

app.listen(3333,() => console.log("The Server is ON in port 3333"))