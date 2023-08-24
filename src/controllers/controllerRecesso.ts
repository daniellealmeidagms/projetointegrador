import { Request, Response } from "express"
import { ServiceRecesso } from "../services/serviceRecesso"

const SERVICE = new ServiceRecesso()

export class ControllerRecesso {
  async create(request: Request, response: Response) {
    const { data_recesso, descricao_recesso } = request.body
    const RESULT = await SERVICE.create(data_recesso, descricao_recesso)
    if (RESULT instanceof Error) {
      return response.status(409).json(RESULT.message)
    }
    return response.status(200).json(RESULT)
  }

  async readAll(request: Request, response: Response) {
    const RESULT = await SERVICE.readAll()
    if (RESULT.length < 1) {
      return response.status(204).json("Nenhum Recesso cadastrado!")
    }
    return response.status(200).json(RESULT)
  }

  async readOne(request: Request, response: Response) {
    const { id_recesso } = request.params
    const RESULT = await SERVICE.readOne(id_recesso)
    if (RESULT instanceof Error) {
      return response.status(404).json(RESULT.message)
    }
    return response.status(300).json(RESULT)
  }

  async update(request: Request, response: Response) {
    const { id_recesso } = request.params
    const { descricao_recesso, data_recesso } = request.body
    const RESULT = await SERVICE.update(id_recesso, descricao_recesso, data_recesso)
    if (RESULT instanceof Error) {
      return response.status(404).json(RESULT.message)
    }
    return response.status(200).json(RESULT)
  }

  async delete(request: Request, response: Response) {
    const { id_recesso } = request.params
    const result = await SERVICE.delete(id_recesso)
    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }
    return response.status(300).json(result)
  }

  async filterDate(request: Request, response: Response) {
    const { data_recesso } = request.params
    const RESULT = await SERVICE.filterDate(data_recesso)
    if (RESULT instanceof Error) {
      return response.status(404).json(RESULT.message)
    }
    return response.status(300).json(RESULT)
  }
}
