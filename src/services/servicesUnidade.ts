import { AppDataSource } from "../databases/datasource"
import Unidade from "../models/modelsUnidade"

const cursor = AppDataSource.getRepository(Unidade)

export class ServiceUnidades {
  async create(
    descricao_unidade,
    carga_horaria_unidade,
    ordem,
    fk_curso
  ): Promise<Unidade | Error> {
    if (await cursor.findOne({ where: { descricao_unidade } })) {
      return new Error("unidade ja cadastrada")
    }
    const unidades = cursor.create({
      descricao_unidade,
      carga_horaria_unidade,
      ordem,
      fk_curso,
    })
    return unidades
  }

  async readAll() {
    const unidades = await cursor.find()
    return unidades
  }
  async readOne(id_unidade): Promise<Unidade | Error> {
    const unidade = await cursor.findOne({ where: { id_unidade } })
    if (!unidade) {
      return new Error("unidade não encontrada!")
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
      return new Error("Unidade não encontrada ")
    }
    unidade.descricao_unidade = descricao_unidade ? descricao_unidade : unidade.descricao_unidade
    unidade.carga_horaria_unidade = carga_horaria_unidade
      ? carga_horaria_unidade
      : unidade.carga_horaria_unidade
    unidade.ordem = ordem ? ordem : unidade.ordem
    unidade.fk_curso = fk_curso ? fk_curso : unidade.fk_curso
    await cursor.save(unidade)
    return unidade
  }

  async delete(id_unidade) {
    const unidade = await cursor.findOne({ where: { id_unidade } })
    if (!unidade) {
      return new Error("unidade não encontrada!")
    }
    await cursor.delete(unidade.id_unidade)
    return "Unidade excluida com sucesso"
  }
}
