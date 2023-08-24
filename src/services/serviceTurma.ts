import { AppDataSource } from "../databases/datasource"
import Turma from "../models/turma"

const cursor = AppDataSource.getRepository(Turma)

export class ServiceTurma {
  async create( data_inicio, data_fim, horas_aula_dia, turno, fk_curso): Promise<Turma | Error> {
    if (await cursor.findOne({ where: { turno, fk_curso } })) {
      return new Error("Turma já cadastrada!")
    }

    // INSERT INTO turma VALUES(data_turma, descricao_turma)
    const turma = cursor.create({
      data_inicio,
      data_fim,
      horas_aula_dia,
      turno,
      fk_curso,
    })
    // F5
    await cursor.save(turma)
    return turma
  }

  async readAll() {
    // find :SELECT * FROM turma
    const turmas = await cursor.find()
    return turmas
  }

  async readOne(id_turma): Promise<Turma | Error> {
    // SELECT * FROM turma WHERE id_turma = id_turma
    const turma = await cursor.findOne({ where: { id_turma } })
    if (!turma) {
      return new Error("Turma não encontrada!")
    }
    return turma
  }

  async update(
    id_turma,
    data_inicio,
    data_fim,
    horas_aula_dia,
    turno,
    fk_curso
  ): Promise<Turma | Error> {
    const turma = await cursor.findOne({ where: { id_turma } })

    if (!turma) {
      return new Error("Turma não encontrada!")
    }
    turma.data_inicio = data_inicio ? data_inicio : turma.data_inicio
    turma.data_fim = data_fim ? data_fim : turma.data_fim
    turma.horas_aula_dia = horas_aula_dia ? horas_aula_dia : turma.horas_aula_dia
    turma.turno = turno ? turno : turma.turno
    turma.fk_curso = fk_curso ? fk_curso : turma.fk_curso
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
  async filterTurno(turno) {
    // SELECT * FROM turma WHERE id_turma = id_turma
    const turmas = await cursor.find({ where: { turno } })
    return turmas
  }
}
