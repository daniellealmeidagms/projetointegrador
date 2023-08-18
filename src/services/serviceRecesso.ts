
import { AppDataSource} from "../databases/datasource"
import Recesso from "../models/recesso"

const cursor = AppDataSource.getRepository(Recesso)

export class ServiceRecesso {
  async create(data_recesso, descricao_recesso): Promise<Recesso | Error>{
    if(await cursor.findOne({where: {data_recesso}})) {
      return new Error("Recesso já cadastrado!")
    }
    const recesso = cursor.create({
      data_recesso,
      descricao_recesso,
    })
    await cursor.save(recesso)
    return recesso
  }
  async readAll(){
    const recessos = await cursor.find()
    return recessos
  }
  async readOne(id_recesso): Promise<Recesso | Error> {
  const recesso = await cursor.findOne({where:{id_recesso}})
  if(!recesso){
    return new Error("Recesso não encontrado!")
  }
    return recesso
  }
  async update(
    id_recesso,
    descricao_recesso,
    data_recesso):Promise<Recesso | Error> {
    const recesso = await cursor.findOne({where: {id_recesso}})
    if(!recesso) {
      return new Error("Recesso não encontrado!")
    }
    recesso.descricao_recesso = descricao_recesso ? descricao_recesso : recesso.descricao_recesso
    recesso.data_recesso = data_recesso ? data_recesso: recesso.data_recesso
    await cursor.save(recesso)
    return recesso                                                                                                                  
  }
  async delete(id_recesso){
    const recesso = await cursor.findOne({where:{id_recesso}})
    if(!recesso){
      return new Error("Recesso não encontrado!")
    }
    await cursor.delete(recesso.id_recesso)
    return "Recesso excluído com sucesso"
  }
}
