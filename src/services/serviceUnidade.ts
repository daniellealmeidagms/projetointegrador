import { AppDataSource } from "../databases/datasource"
import Unidade from "../models/unidade"

const cursor = AppDataSource.getRepository(Unidade)

export class ServiceRecesso {
  async create(descricao_unidade, carga_horaria_unidade, ordem): Promise<Unidade | Error> {
    if (await cursor.findOne({ where: { descricao_unidade } })) {
      return new Error("Unidade ja cadastrada")
    }
    const unidade = cursor.create({
      descricao_unidade,
      carga_horaria_unidade,
      ordem,
    })
    await cursor.save(unidade)
    return unidade
  }
  async readAll() {
    const unidades = await cursor.find()
    return unidades
  }
  async readOne(id_unidade) {
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
    ordem
  ): Promise<Unidade | Error> {
    const unidade = await cursor.findOne({ where: { id_unidade } })
    if (!unidade) {
      return new Error("Unidade nao encontrada!")
    }
    unidade.descricao_unidade = descricao_unidade ? descricao_unidade : unidade.descricao_unidade
    unidade.carga_horaria_unidade = carga_horaria_unidade
      ? carga_horaria_unidade
      : unidade.carga_horaria_unidade
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
}
