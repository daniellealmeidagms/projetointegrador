import { Entity, PrimaryColumn, Column } from "typeorm"
@Entity("curso")
export default class curso {
  @PrimaryColumn()
  id_curso:string
  @Column()
  descricao_curso:string
  @Column()
  carga_horaria_curso:number
  @Column()
  modalidade:string
  @Column()
  eixo:string
  @Column()
  id_turma:string
  @Column()
  id_aula:string
}

//By Pablo Henrique R. Alves