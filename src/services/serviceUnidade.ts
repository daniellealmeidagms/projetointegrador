import{ AppDataSource } from "../databases/datasource"
import Unidade from "../models/unidade"

const cursor = AppDataSource.getRepository(Unidade)

export class ServiceUnidade {
    async create() { }

    async readAll() {
        //find SELECT * FROM unidade
        const unidade = await cursor.find()
        return unidade
    }
async readOne(id_unidade) {
    //SELECT * FROM unidade WHERE id_unidade = id_unidade
    const unidade = await cursor.findOne ({ where: {id_unidade}})
    if (!unidade) {
        return new Error("Unidade não encontrado")
    }
    return unidade
}
async update() {}
async delete() {}
}


