import { AppDataSource } from "../databases/datasource"
import Unidade from "../models/unidade"

const cursor = AppDataSource.getRepository(Unidade)

export class ServiceUnidade {
  async create(
    descricao_unidade,
    carga_horaria_unidade,
    ordem,
    fk_curso
  ): Promise<Unidade | Error> {
    if (await cursor.findOne({ where: { descricao_unidade } })) {
      return new Error("Unidade ja cadastrada")
    }
    const unidade = cursor.create({
      descricao_unidade,
      carga_horaria_unidade,
      ordem,
      fk_curso,
    })
    await cursor.save(unidade)
    return unidade
  }
  async readAll() {
    const unidades = await cursor.find()
    return unidades
  }
  async readOne(id_unidade): Promise<Unidade | Error> {
    const unidade = await cursor.findOne({ where: { id_unidade } })
    if (!unidade) {
      return new Error("Unidade nao encontrada")
    }
    return unidade
  }
  async update(
    id_unidade,
    descricao_unidade,
    carga_horaria_unidade,
    ordem,
    fk_curso
  ): Promise<Unidade | Error> {
    const unidade = await cursor.findOne({ where: { id_unidade } })
    if (!unidade) {
      return new Error("Unidade nao encontrada!")
    }
    unidade.descricao_unidade = descricao_unidade ? descricao_unidade : unidade.descricao_unidade
    unidade.carga_horaria_unidade = carga_horaria_unidade
      ? carga_horaria_unidade
      : unidade.carga_horaria_unidade
    unidade.fk_curso = fk_curso ? fk_curso : unidade.fk_curso
    unidade.ordem = ordem ? ordem : unidade.ordem
    await cursor.save(unidade)
    return unidade
  }
  async delete(id_unidade) {
    const unidade = await cursor.findOne({ where: { id_unidade } })
    if (!unidade) {
      return new Error("Unidade nao encontrada")
    }
    await cursor.delete(unidade.id_unidade)
    return "Unidade excluida com sucesso"
  }
  async filterTime(carga_horaria_unidade) {
    const unidades = await cursor.find({ where: { carga_horaria_unidade } })
    return unidades
  }
  async filterCurso(fk_curso) {
    const curso = await cursor.findOne ({where: {fk_curso}})
    if(!fk_curso) {
      return new Error (" curso nao encontrado ")
    
    }
    return curso 
  }
}
