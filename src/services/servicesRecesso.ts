import {AppDataSource} from "../databases/datasource"

import Recesso from "../models/recesso"

const CURSOR = AppDataSource.getRepository(Recesso)

export class ServiceRecesso {
  async create(data_recesso, descricao_recesso): Promise<Recesso | Error> {
    if (await CURSOR.findOne({ where: { data_recesso } })) {
      return new Error("Recesso já Cadastrado")
    }

    const recesso = CURSOR.create({
      data_recesso,
      descricao_recesso,
    })

    await CURSOR.save(recesso)

    return recesso
  }
  async readAll() {
    const recessos = await CURSOR.find()
    return recessos
  }
  async readOne(id_recesso): Promise<Recesso | Error> {
    const recesso = await CURSOR.findOne({ where: id_recesso })
    if (!recesso) {
      return new Error("Recesso não encontrado")
    }

    return recesso
  }
  async update() {}
  async delete(id_recesso){
    const recesso = await CURSOR.findOne({ where: id_recesso })
    if (!recesso) {
      return new Error("Recesso não encontrado")
    }
    await CURSOR.delete(recesso.id_recesso)
    return "Recesso excluiod com sucesso"
  }
}