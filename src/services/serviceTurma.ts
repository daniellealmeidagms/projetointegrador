import { AppDataSource } from "../databases/datasource" 
import Turma from "../models/turma"

const cursor = AppDataSource.getRository(Turma)

export class ServiceTurma{
  async create(){}

  async readAll(){
     // find :SELECT * FROM turma
    const turma = await cursor.find()
    return turma
  }

  async readOne(){}
  async update(){}
  async delete(){}
  }
