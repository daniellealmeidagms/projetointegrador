import {Entity, PrimaryColumn, Column} from "typeorm"

@Entity("aulas")
export default class Aula {
  //chave primaria
  @PrimaryColumn()
  id_aluno: string
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

  constructor(){
    
  }
}