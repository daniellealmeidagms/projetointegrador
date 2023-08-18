  import { promises } from 'dns';
import { AppDataSource } from "../databases/datasource";
  import Aula from "../models/aula";

  //recebeu  uma instancia  do repositoria para a tabela aula.

  const cursor = AppDataSource.getRepository(Aula);

  //funcoes crud
  export class ServiceAula {
  
  async create(data_aula,status_aula, fk_turma, fk_unidade): Promise<Aula | Error> {
  //verifica se tem um registro igual no sistema

  if (
  await cursor.findOne({
  where: { data_aula, status_aula, fk_turma, fk_unidade },
  })
  ) {
  return new Error("Aula já cadastrado");
  }

  const aula = cursor.create({
  data_aula,
  status_aula,
  fk_turma,
  fk_unidade,
  });

  await cursor.save(aula);
  return aula;
  }

  async readAll() {
  //find: Select * from aula
  const aula = await cursor.find();
  return aula;
  }

  async readOne(id_aula) : Promise<Aula|Error> {
  //select * from aluno where id_aula = id_aula
  const aula = await cursor.findOne({ where: { id_aula } });
  if (!aula) {
  return new Error("Aula não encontrada!");
  }
  return aula;
  }

  async update(
    id_aula,
    data_aula,
    status_aula, 
    fk_turma,
    fk_unidade,
  ): Promise<Aula|Error> {
    const aula = await cursor.findOne({ where: {id_aula}})
    if(!Aula) {
      return new Error("Aula não encontrada!")
    }

    //o objeto receberá o valor definido pelo usuario, se houver, do contrario, manterá o que ja havia. 

    //feriado
    aula.data_aula = data_aula ? data_aula : aula.data_aula
    aula.status_aula = status_aula ? status_aula : aula.status_aula
    aula.fk_turma = fk_turma ? fk_turma : aula.fk_turma
    aula.fk_unidade = fk_unidade ? fk_unidade : aula.fk_unidade

    await cursor.save(aula)
    return aula
  }

  async delete(id_aula) {
  const aula = await cursor.findOne({ where: { id_aula } });
  if (!aula) {
  return new Error("Aula não encontrada!");
  }
  await cursor.delete(aula.id_aula);
  return "Recesso excluido com sucesso!";
  }
  }
