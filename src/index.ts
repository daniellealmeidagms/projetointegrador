import { AppDataSource } from "./databases/datasource"
import ROTAS from "./routes/routes"

AppDataSource.initialize().then()
console.log("Database connected!")

const PORT = 3333
const EXPRESS = require("express")
const APP = EXPRESS()
APP.use(EXPRESS.json())
APP.use(ROTAS)

APP.listen(PORT, () => console.log("O server está ON na porta 3333"))
