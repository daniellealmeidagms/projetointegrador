import { DataSource } from "typeorm"
import Aula from '../models/aulas'
import Curso from '../models/cursos'
import Unidade from '../models/unidade'
import Recesso from '../models/recesso'
import Turma from '../models/turma'
import curso from '../models/cursos'

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "cronogramas",
  synchronize: true,
  logging: true,
  entities: [Aula, Curso, Recesso, Turma, Unidade]
})
