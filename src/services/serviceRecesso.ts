import { AppDataSource } from "../databases/datasource"
import Recesso from "../models/recesso"

const cursor = AppDataSource.getRepository(Recesso)

export class ServiceRecesso {
  async create(data_recesso, descricao_recesso): Promise<Recesso | Error> {
    // Verifica se já existe algum registro igual no sistema
    if (await cursor.findOne({ where: { data_recesso } })) {
      return new Error("Recesso já cadastrado!")
    }
    // INSERT INTO recesso VALUES( data_recesso, descricao_recesso )
    const recesso = cursor.create({
      data_recesso,
      descricao_recesso,
    })
    // F5
    await cursor.save(recesso)
    return recesso
  }

  async readAll() {
    // find: SELECT * FROM recesso
    const recessos = await cursor.find()
    return recessos
  }

  async readOne(id_recesso) {
    
    const recesso = await cursor.findOne({ where:  id_recesso  })
    if (!recesso) {
      return new Error("Recesso não encontrado!")
    }
    return recesso
  }

  async update(id_recesso, descricao_recesso, data_recesso): Promise<Recesso | Error> {
    const recesso = await cursor.findOne({ where: { id_recesso } })
    if (!recesso) {
      return new Error("Recesso não encontrado!")
    }
    // O objeto receberá o valor definido pelo usuário, se houver; do contrário, manterá o que já havia.
    recesso.descricao_recesso = descricao_recesso ? descricao_recesso : recesso.descricao_recesso
    recesso.data_recesso = data_recesso ? data_recesso : recesso.data_recesso
    await cursor.save(recesso)
    return recesso
  }

  async delete(id_recesso) {
    // SELECT * FROM recesso WHERE id_recesso = id_recesso
    const recesso = await cursor.findOne({ where: { id_recesso } })
    if (!recesso) {
      return new Error("Recesso não encontrado!")
    }
    // DELETE FROM recesso WHERE id_recesso = id_recesso
    await cursor.delete(recesso.id_recesso)
    return "Recesso excluído com sucesso!"
  }

  async filterData(data_recesso): Promise < Recesso | Error>{
    const recesso = await  cursor.findOne({where :data_recesso})
    if(!recesso){
      return new Error("Data não encontrada!!!")
    }
    
    return recesso
  }
}
