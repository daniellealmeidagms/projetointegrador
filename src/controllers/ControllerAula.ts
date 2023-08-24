import { Request, Response } from "express"
import { ServiceAula } from "../services/serviceAula"
import { stat } from 'fs/promises'

const service = new ServiceAula()

export class ControlerAula {
  async create(request: Request, response: Response) {
    const { data_aula, status_aula, fk_turma, fk_unidade } = request.body
    const result = await service.create(data_aula, status_aula, fk_turma, fk_unidade)
    if (result instanceof Error) {
      return response.status(409).json(result.message)
    }
    return response.status(200).json(result)
  }

  async readAll(request: Request, response: Response) {
    const result = await service.readAll()
    if (result.length < 1) {
      return response.status(204).json("Nenhum acesso cadastrado")
    }
    return response.status(200).json(result)
  }

  async readOne(request: Request, response: Response) {
    const { id_aula } = request.params
    const result = await service.readOne({ id_aula })
    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }
    return response.status(200).json(result)
  }

  async update(request: Request, response: Response) {
    const { id_aula } = request.params
    const { data_aula, status_aula, fk_turma, fk_unidade } = request.body
    const result = await service.update(id_aula, data_aula, status_aula, fk_turma, fk_unidade)
    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }
    return response.status(200).json(result)
  }

  async delete(request: Request, response: Response) {
    const { id_aula } = request.params
    const result = await service.delete(id_aula)
    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }
    return response.status(300).json(result)
  }

  async filterData(request: Request, response: Response) {
    const { data_aula } = request.params
    const result = await service.filterData(data_aula)
    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }
    return response.status(300).json(result)
  }

  async filterTurma(request: Request, response: Response) {
    const {fk_turma} = request.params
    const result = await service.filterTurma(fk_turma)
    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }
    return response.status(300).json(result)
  }

  async filterStatus(request: Request, response: Response) {
    const { status_aula } = request.params
    const result = await service.filterStatus(status_aula)
    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }
    return response.status(300).json(result)
  }
}
