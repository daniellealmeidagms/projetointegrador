import { AppDataSource } from "../databases/datasource"
import Aula from "../models/modelAula"

const cursor = AppDataSource.getRepository(Aula)

export class ServiceAula {
  async create(
    data_aula,
    status_aula,
    fk_turma,
    fk_unidade
  ): Promise<Aula | Error> {
    if (
      await cursor.findOne({
        where: { data_aula, status_aula, fk_turma, fk_unidade },
      })
    ) {
      return new Error("Aula já cadastrada!")
    }
    const aula = cursor.create({
      data_aula,
      status_aula,
      fk_turma,
      fk_unidade,
    })
    await cursor.save(aula)
    return aula
  }

  async readAll() {
    const aulas = await cursor.find()
    return aulas
  }

  async readOne(id_aula): Promise<Aula | Error> {
    const aula = await cursor.findOne({ where: { id_aula } })
    if (!aula) {
      return new Error("Aula não encontrada")
    }
    return aula
  }

  async update(
    id_aula,
    data_aula,
    status_aula,
    fk_turma,
    fk_unidade
  ): Promise<Aula | Error> {
    const aula = await cursor.findOne({ where: { id_aula } })
    if (!aula) {
      return new Error("Aula não encontrada!")
    }
    aula.data_aula = data_aula ? data_aula : aula.data_aula
    aula.status_aula = status_aula ? status_aula : aula.status_aula
    aula.fk_turma = fk_turma ? fk_turma : aula.fk_turma
    aula.fk_unidade = fk_unidade ? fk_unidade : aula.fk_unidade
    await cursor.save(aula)
    return aula
  }

  async delete(id_aula) {
    const aula = await cursor.findOne({ where: { id_aula } })
    if (!aula) {
      return new Error("Aula não encontrada! ")
    }
    await cursor.delete(aula.id_aula)
    return "Aula exculída com sucesso!"
  }

  async filter_data_aula(data_aula) {
    const aula = await cursor.find({ where: { data_aula } })
    if (!aula) {
      return new Error("Data não encontrada")
    }
    return aula
  }
  async filter_turma(fk_turma) {
    const aula = await cursor.find({ where: { fk_turma } })
    if (!aula) {
      return new Error("Turma não encontrada")
    }
    return aula
  }
  async filter_status(status_aula) {
    const aula = await cursor.findOne({ where: status_aula })
    if (!aula) {
      return new Error("Status não encontrado")
    }
    return aula
  }
}
