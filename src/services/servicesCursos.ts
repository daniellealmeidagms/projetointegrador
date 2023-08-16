import { AppDataSource  } from '../databases/datasource'
import cursos from '../models/cursos'
const cursor = AppDataSource.getRepository(cursos)
export class servicesCursos {
  async create() {
    
  }
  async ReadAll() {
    const cursos = await cursor.find()
    return cursos
  }
  async readonly(id_curso) {
    const curso = await cursor.findOne({where: {id_curso} })
    if (!curso) {
      return new Error("Curso não existente!")
    }
    return curso
  }
  async delete(id_curso) {
    const curso = await cursor.findOne({where: {id_curso} })
    if (!curso) {
      return new Error("Curso não existente!")
    }
    await cursor.delete(curso.id_curso)
    return "Curso excluido com sucesse!"
  }
}