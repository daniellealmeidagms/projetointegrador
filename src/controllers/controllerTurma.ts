import { Request, Response } from "express"
import { ServiceTurma } from "../services/serviceTurma"

const service = new ServiceTurma()

export class ControllerTurma {
  async create(request: Request, response: Response) {
    const { data_inicio, data_fim, horas_aula_dia, turno, fk_curso } = request.body
    const result = await service.create(data_inicio, data_fim, horas_aula_dia, turno, fk_curso)
    if (result instanceof Error) {
      return response.status(204).json(result.message)
    }
    return response.status(200).json(result)
  }

  async readAll(request: Request, response: Response) {
    const result = await service.readAll()
    if (result.length < 1) {
      return response.status(204).json("nenhuma turma cadastrada!")
    }
    return response.status(200).json(result)
  }

  async readOne(request: Request, response: Response) {
    const { id_turma } = request.params
    const result = await service.readOne(id_turma)
    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }
    return response.status(200).json(result)
  }

  async update(request: Request, response: Response) {
    const { id_turma } = request.params
    const { data_inicio, data_fim, horas_aula_dia, turno, fk_curso } = request.body
    const result = await service.update(
      id_turma,
      data_inicio,
      data_fim,
      horas_aula_dia,
      turno,
      fk_curso
    )
    if (result instanceof Error) {
      return response.status(404).json(result.message)
    }
    return response.status(200).json(result)
  }

  async delete(request: Request, response: Response) {
    const { id_turma } = request.params
    const result = await service.delete(id_turma)
    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }
    return response.status(300).json(result)
  }
  async filterTurno(request: Request, response: Response) {
    const { turno } = request.params
    const result = await service.filterTurno(turno)
    if (result.length < 1) {
      return response.status(204).json("nenhuma turma com esse turno foi encontrado!")
    }
    return response.status(200).json(result)
  }
}
