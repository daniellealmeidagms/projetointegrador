import { DataSource } from "typeorm"
import Unidade from "../models/unidade"
import Recesso from "../models/recesso"
import Turma from "../models/turma"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "cronogramas",
  synchronize: true,
  logging: true,
  entities: [Unidade, Recesso, Turma],
})
