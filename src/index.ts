import { AppDataSource } from './databases/datasource';

AppDataSource.initialize().then()
console.log("Database connected!")

const express = require("express")
const app = express()
app.use(express.json())
app.listen(3333, () => console.log("O server esta ON na porta 3333"))

