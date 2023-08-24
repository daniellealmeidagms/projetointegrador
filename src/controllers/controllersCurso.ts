import { Request, Response } from "express"
import { ServicesCursos } from "../services/servicesCursos"
const service = new ServicesCursos()
export class ControllerCurso {
  async create(request: Request, response: Response) {
    const { descricao_curso, carga_horaria_curso, modalidade, eixo } = request.body
    const result = await service.create(descricao_curso, carga_horaria_curso, modalidade, eixo)
    if (result instanceof Error) {
      return response.status(409).json(result.message)
    }
    return response.status(200).json(result)
  }
  async readAll(request: Request, response: Response) {
    const result = await service.readAll()
    if (result.length < 1) {
      return response.status(204).json("nenhum curso registrado!")
    }
    return response.status(200).json(result)
  }
  async readOne(request: Request, response: Response) {
    const { id_curso } = request.params
    const result = await service.readOne({ id_curso })
    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }
    return response.status(200).json(result)
  }
  async update(request: Request, response: Response) {
    const { id_curso } = request.params
    const { descricao_curso, carga_horaria_curso, modalidade, eixo } = request.body
    const result = await service.update(
      id_curso,
      descricao_curso,
      carga_horaria_curso,
      modalidade,
      eixo
    )
    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }
    return response.status(200).json(result)
  }
  async delete(request: Request, response: Response) {
    const { id_curso } = request.params
    const result = await service.delete(id_curso)
    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }
    return response.status(300).json(result)
  }
  async filterEixo(request: Request, response: Response) {
    const { eixo } = request.body
    const result = await service.filterEixo(eixo)
    if (result instanceof Error) {
      return response.status(300).json(result.message)
    }
    return response.status(200).json(result)
  }
  async filterModalidade(request: Request, response: Response) {
    const { modalidade } = request.params
    console.log(modalidade)
    const result = await service.filterModalidade(modalidade)
    if (result instanceof Error) {
      return response.status(300).json(result.message)
    }
    return response.status(200).json(result)
  }
}
