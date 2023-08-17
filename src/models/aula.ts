  import {Entity, PrimaryColumn, Column} from "typeorm"
  import {v4 as uuid } from "uuid"

  @Entity("aulas")
  export default class Aula {
  //chave primaria
  @PrimaryColumn()
  id_aula: string
  //atributos
  @Column({nullable: false})
  data_aula: Date
  @Column({nullable: false})
  status_aula: string
  //Chave estrangeira
  @Column()
  fk_turma: string
  @Column()
  fk_unidade: string

  constructor() {
    this.id_aula = uuid()
  }
  }