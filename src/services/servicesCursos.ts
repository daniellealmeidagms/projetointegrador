import { AppDataSource } from "../databases/datasource"
import Curso from "../models/cursos"
const cursor = AppDataSource.getRepository(Curso)
export class ServicesCursos {
  async create(descricao_curso, carga_horaria_curso, modalidade, eixo): Promise<Curso | Error> {
    if (await cursor.findOne({ where: { descricao_curso } })) {
      return new Error("Curso já registrado!")
    }
    const curso = cursor.create({
      descricao_curso,
      carga_horaria_curso,
      modalidade,
      eixo,
    })
    await cursor.save(curso)
    return curso
  }
  async readAll() {
    const cursos = await cursor.find()
    return cursos
  }
  async readOne(id_curso) {
    const curso = await cursor.findOne({ where: { id_curso } })
    if (!curso) {
      return new Error("Curso não existente!")
    }
    return curso
  }
  async update(
    id_curso,
    descricao_curso,
    carga_horaria_curso,
    modalidade,
    eixo
  ): Promise<Curso | Error> {
    const curso = await cursor.findOne({ where: { id_curso } })
    if (!curso) {
      return new Error("Curso não existente!")
    }
    curso.descricao_curso = descricao_curso ? descricao_curso : curso.descricao_curso
    curso.carga_horaria_curso = carga_horaria_curso
      ? carga_horaria_curso
      : curso.carga_horaria_curso
    curso.modalidade = modalidade ? modalidade : curso.modalidade
    curso.eixo = eixo ? eixo : curso.eixo
    await cursor.save(curso)
    return curso
  }
  async delete(id_curso) {
    const curso = await cursor.findOne({ where: { id_curso } })
    if (!curso) {
      return new Error("Curso não existente!")
    }
    await cursor.delete(curso.id_curso)
    return "Curso excluido com sucesse!"
  }
}
