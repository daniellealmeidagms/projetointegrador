import { AppDataSource } from "../databases/datasource"
import aula from "../models/aula"
const cursor = AppDataSource.getRepository(aula)
export class Serviceaula {
  async create(data_aula, status_aula, fk_turma, fk_unidade): Promise<aula | Error> {
    if (await cursor.findOne({ where: { data_aula } })) {
      return new Error("aula já cadastrada!")
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
  async readOne(id_aulas): Promise<aula | Error> {
    const aula = await cursor.findOne({ where: { id_aulas } })
    if (!aula) {
      return new Error("aula não encontrada!")
    }
    return aula
  }
  async update(id_aulas, data_aula, status_aula, fk_turma, fk_unidade): Promise<aula | Error> {
    const aula = await cursor.findOne({ where: { id_aulas } })
    if (!aula) {
      return new Error("aula não encontrada!")
    }
    aula.data_aula = data_aula ? data_aula : aula.data_aula
    aula.status_aula = status_aula ? status_aula : aula.data_aula
    aula.fk_turma = fk_turma ? fk_turma : aula.fk_turma
    aula.fk_unidade = fk_unidade ? fk_unidade : fk_unidade
    await cursor.save(aula)
    return aula
  }
  async delete(id_aulas) {
    const aula = await cursor.findOne({ where: { id_aulas } })
    if (!aula) {
      return new Error("aula não encontrada! ")
    }
    await cursor.delete(aula.id_aulas)
    return "aula excuída com sucesso!"
  }
  async filter_data_aula(data_aula) {
    const aula = await cursor.findOne({ where:data_aula})
    if (!aula) {
      return new Error("Data nao encontrada")
    }
    return aula
  }
  async filter_turma(fk_turma) {
    const aula = await cursor.findOne({ where:fk_turma })
    if (!aula) {
      return new Error("Turma não encontrada")
    }
    return aula
  }
  async filter_status(status_aula) {
    const aula = await cursor.findOne({ where:status_aula})
    if (!aula) {
      return new Error("Status não encontrado")
    }
    return aula
  }
}