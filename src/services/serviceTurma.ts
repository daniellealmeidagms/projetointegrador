import { AppDataSource } from "../databases/datasource"
import Turma from "../Models/turma"

const cursor = AppDataSource.getRepository(Turma)

export class ServiceTurma {
  async create(data_inicio, data_fim, horas_aula_dia) {
    // Verifica se já existe algum registro igual no sistema
    if (await cursor.findOne({ where: { data_inicio } })) {
      return new Error("Turma já cadastrada!")
    }
    // INSERT INTO turma VALUES(data_turma, descricao_turma)
    const turma = cursor.create({
      data_inicio,
      data_fim,
      horas_aula_dia,
    })
    // F5
    await cursor.save(turma)
    return turma
  }

  async readAll() {
    // find :SELECT * FROM turma
    const turma = await cursor.find()
    return turma
  }

  async readOne(id_turma) {
    // SELECT * FROM turma WHERE id_turma = id_turma
    const turma = await cursor.findOne({ where: { id_turma } })
    if (!turma) {
      return new Error("Turma não encontrada!")
    }
    return turma
  }

  async update(id_turma, data_inicio, data_fim, horas_aula_dia) {
    const turma = await cursor.findOne({ where: { id_turma } })

    if (!turma) {
      return new Error("Turma não encontrada!")
    }
    turma.data_inicio = data_inicio ? data_inicio : turma.data_inicio
    turma.data_fim = data_fim ? data_fim : turma.data_fim
    turma.horas_aula_dia = horas_aula_dia ? horas_aula_dia : horas_aula_dia
    await cursor.save(turma)
    return turma
  }

  async delete(id_turma) {
    // SELECT * FROM turma WHERE id_turma = id _turma
    const turma = await cursor.findOne({ where: { id_turma } })
    if (!turma) {
      return new Error("Turma não encontrada!")
    }
    // DELETE FROM turma WHERE id_turma = id_turma
    await cursor.delete(turma.id_turma)
    return "Turma excluída com sucesso!"
  }
}
