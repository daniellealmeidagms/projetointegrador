import { Request, Response, response } from 'express'
import { servicesCursos } from '../models/servicesCursos'

const service = new servicesCursos()

export class controllerCurso {
  async create(request: Request, response: Response){
    const { descricao_curso, carga_horaria_curso, modalidade, eixo } =
      request.body
    const result = await service.create(descricao_curso,carga_horaria_curso,modalidade,eixo )
    if (result instanceof Error) {
      return response.status(409).json(result.message)
    }
    return response.status(200).json(result)
  }

  async readAll(request: Request, response: Response){
    const result = await service.ReadAll()
    if (result.length < 1) {
      return response.status(204).json("Nenhum curso cadastrado!")
    }
    return response.status(200).json(result)
  }
  async readOne(request: Request, response: Response){
    const { id_curso } = request.params
    const result = await service.readOne({ id_curso })
    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }
    return response.status(200).json(result)
  }

  async update(request: Request, response: Response){
    const { id_curso } = request.params
    const { descricao_curso, carga_horaria_curso, modalidade, eixo } =
      request.body
    const result = await service.update(id_curso, descricao_curso,carga_horaria_curso,modalidade,eixo)
    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }
    return response.status(200).json(result)
  }

  async delete(request: Request, response: Response){
    const { id_curso } = request.params
    const result = await service.delete(id_curso )
    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }
    return response.status(300).json(result)
  }
} 