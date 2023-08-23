import { Request, Response } from "express"
import { ServiceRecesso } from "../services/serviceRecesso"

const service = new ServiceRecesso()

export class ControllerRecesso {
  async create(request: Request, response: Response) {
    const { data_recesso, descricao_recesso } = request.body
    const result = await service.create(data_recesso, descricao_recesso)
    if (result instanceof Error) {
      return response.status(409).json(result.message)
    }
    return response.status(200).json(result)
  }

  async readAll(request: Request, response: Response) {
    const result = await service.readAll()
    if (result.length < 1) {
      return response.status(204).json("Nenhum recesso cadastrado!")
    }
    return response.status(200).json(result)
  }

 async readOne(request: Request, response: Response) {
  const { id_recesso } = request.params;
  console.log("ID recebido:", id_recesso); // Adicione esta linha
  const result = await service.readOne(id_recesso);
  if (result instanceof Error) {
    return response.status(404).json(result.message);
  }
  return response.status(200).json(result);
}

  async update(request: Request, response: Response) {
    const { id_recesso } = request.params
    const { data_recesso, descricao_recesso } = request.body
    const result = await service.update(id_recesso, descricao_recesso, data_recesso)
    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }
    return response.status(200).json(result)
  }

  async delete(request: Request, response: Response) {
    const { id_recesso } = request.params
    const result = await service.delete(id_recesso)
    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }
    return response.status(300).json(result)
  }

  async filterDate(request: Request, response: Response) {
    const { data_recesso } = request.params
    const dateObject = new Date(data_recesso)
    const formattedDate = dateObject.toISOString().split("T")[0]
    const result = await service.filterDate(formattedDate)
    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }
    return response.status(200).json(result)
  }
}
