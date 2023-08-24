import { DataSource } from "typeorm"
import Aula from "../models/modelAula"
import Curso from "../models/modelCurso"
import Recesso from "../models/modelRecesso"
import Turma from "../models/modelTurma"
import Unidade from "../models/modelUnidade"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "cronogramas",
  synchronize: true,
  logging: true,
  entities: [Aula, Curso, Recesso, Turma, Unidade],
})
