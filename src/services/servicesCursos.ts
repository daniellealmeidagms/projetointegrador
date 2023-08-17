import { AppDataSource  } from '../databases/datasource'
import Curso from '../models/cursos'
const cursor = AppDataSource.getRepository(Curso)
export class servicesCursos {
  async create(descricao_curso, carga_horaria_curso, modalidade, eixo): Promise<Curso | Error> {
    if (await cursor.findOne({where: {descricao_curso} })) {
      return new Error("Curso já registrado!")
    }
    const curso = cursor.create({
      carga_horaria_curso,
      modalidade,
      eixo
    })
    await cursor.save(curso)
    return curso
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