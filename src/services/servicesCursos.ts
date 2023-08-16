  import { AppDataSource } from '../databases/datasource';
  import cursos from '../models/cursos';


  const cursor = AppDataSource.getRepository(cursos)

  export class ServicesCursos {
    async create() {}
    async readAll() {
      const cursos = await cursor.find()
      return cursos
    }
    async readOne() {
      const cursos = await cursor.findOne({where: {id_curso}})
      if (!cursos) {
        return new Error('Curso não encontrado!')
      }
      return cursos
    }
    async update() {}
    async delete() {}

  }

