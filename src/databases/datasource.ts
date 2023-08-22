import { DataSource } from "typeorm"
import Unidade from '../models/modelsUnidade'

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "cronogramas",
  synchronize: true,
  logging: true,
  entities:[Unidade]
})
