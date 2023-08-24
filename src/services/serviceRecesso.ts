import { AppDataSource } from "../databases/datasource"
import Recesso from "../models/recesso"

const CURSOR = AppDataSource.getRepository(Recesso)

export class ServiceRecesso {
  async create(data_recesso, descricao_recesso): Promise<Recesso | Error> {
    if (await CURSOR.findOne({ where: { data_recesso } })) {
      return new Error("Recesso já cadastrado!")
    }

    const RECESSO = CURSOR.create({
      data_recesso,
      descricao_recesso,
    })

    await CURSOR.save(RECESSO)
    return RECESSO
  }

  async readAll() {
    const TODOS_RECESSOS = await CURSOR.find()
    return TODOS_RECESSOS
  }

  async readOne(id_recesso): Promise<Recesso | Error> {
    const RECESSO = await CURSOR.findOne({ where: { id_recesso } })

    if (!RECESSO) {
      return new Error("Recesso não encontrado!")
    }
    return RECESSO
  }

  async update(id_recesso, descricao_recesso, data_recesso): Promise<Recesso | Error> {
    const RECESSO = await CURSOR.findOne({ where: { id_recesso } })
    if (!RECESSO) {
      return new Error("Recesso não encontrado!")
    }
    RECESSO.descricao_recesso = descricao_recesso ? descricao_recesso : RECESSO.descricao_recesso
    RECESSO.data_recesso = data_recesso ? data_recesso : RECESSO.data_recesso

    await CURSOR.save(RECESSO)
    return RECESSO
  }

  async delete(id_recesso) {
    const recesso = await CURSOR.findOne({ where: { id_recesso } })
    if (!recesso) {
      return new Error("Recesso não encontrado!")
    }
    await CURSOR.delete(recesso.id_recesso)
    return "Recesso excluído com sucesso!"
  }

  async filterDate(data_recesso): Promise<Recesso | Error> {
    console.log(data_recesso)
    const RECESSO = await CURSOR.findOne({ where: { data_recesso } })
    if (!RECESSO) {
      return new Error("Data não encontrada!")
    }
    return RECESSO
  }
}
