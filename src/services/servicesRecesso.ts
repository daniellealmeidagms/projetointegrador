import {AppDataSource} from "../databases/datasource"

import Recesso from "../models/recesso"

const CURSOR = AppDataSource.getRepository(Recesso)

export class ServiceRecesso{

  async create(){
    // const recessos = await CURSOR.save(objeto)
    // return recessos

  }
  async readAll(){

    const recessos = await CURSOR.find()
    return recessos
    
  }
  async readOne(){

    // const recessos = await CURSOR.findOneBy({id_recesso})
    // return recessos

    
  }
  async update(){


    
  }
  async delete(){

    // const recessos = await CURSOR.remove()
    // return recessos
    
  }
}