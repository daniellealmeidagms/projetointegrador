import { AppDataSource  } from '../databases/datasource'
import cursos from '../models/cursos'
const cursor = AppDataSource.getRepository(cursos)
export class servicesCursos {
  async create() {}

  async ReadAll() {
    const cursos = await cursor.find()
    return cursos
  }
  async readonly() {}
  async update() {}
  async this.delete() {}
}