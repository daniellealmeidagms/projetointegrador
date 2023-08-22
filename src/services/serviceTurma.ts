import { AppDataSource } from "../databases/datasource"
import Turma from "../models/turma"

const cursor = AppDataSource.getRepository(Turma)

export class ServiceTurma {
  // Create
  async create(data_inicio, data_fim, horas_aula_dia, fk_curso): Promise<Turma | Error> {
    if (await cursor.findOne({ where: { horas_aula_dia, fk_curso } })) {
      return new Error("Turma já cadastrada!")
    }
    const turma = cursor.create({
      data_inicio,
      data_fim,
      horas_aula_dia,
      fk_curso
    })
    await cursor.save(turma)
    return turma
  }
  // ReadAll
  async readAll() {
    const turmas = await cursor.find()
    return turmas
  }
  // ReadOne
  async readOne(id_turma): Promise<Turma | Error> {
    const turma = await cursor.findOne({ where: { id_turma } })
    if (!turma) {
      return new Error("Turma não encontrada!")
    }
    return turma
  }
  // Update
  async update(id_turma, data_inicio, data_fim, horas_aula_dia, fk_curso): Promise<Turma | Error> {
    const turma = await cursor.findOne({ where: { id_turma } })
    if (!turma) {
      return new Error("Turma não encontrado!")
    }
    turma.data_inicio = data_inicio ? data_inicio : turma.data_inicio
    turma.data_fim = data_fim ? data_fim : turma.data_fim
    turma.horas_aula_dia = horas_aula_dia ? horas_aula_dia : turma.horas_aula_dia
    turma.fk_curso = fk_curso ? fk_curso : turma.fk_curso
    await cursor.save(turma)
    return turma
  }
  // Delete
  async delete(id_turma) {
    const turma = await cursor.findOne({ where: { id_turma } })
    if (!turma) {
      return new Error("Turma não encontrada!")
    }
    await cursor.delete(turma.id_turma)
    return "Turma exclída com sucesso!"
  }
}
