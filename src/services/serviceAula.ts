import { AppDataSource } from "../databases/datasource"
import Aula from "../models/aula"
const cursor = AppDataSource.getRepository(Aula)
export class Serviceaula {
  async create(data_aula, status_aula, fk_turma, fk_unidade): Promise<Aula | Error> {
    if (await cursor.findOne({ where: { data_aula } })) {
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
  async readOne(id_aulas): Promise<Aula | Error> {
    const aula = await cursor.findOne({ where: { id_aulas } })
    if (!aula) {
      return new Error("Aula não encontrada!")
    }
    return aula
  }
  async update(id_aulas, data_aula, status_aula, fk_turma, fk_unidade): Promise<Aula | Error> {
    const aula = await cursor.findOne({ where: { id_aulas } })
    if (!aula) {
      return new Error("Aula não encontrada!")
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
      return new Error("Aula não encontrada! ")
    }
    await cursor.delete(aula.id_aulas)
    return "Aula excuída com sucesso!"
  }
}
