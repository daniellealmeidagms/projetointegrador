import { Entity, PrimaryColumn, Column } from "typeorm"
@Entity("curso")
export default class Curso {
  @PrimaryColumn()
  id_curso:string
  @Column()
  descricao_curso:string
  @Column({ nullable: false})
  carga_horaria_curso:number
  @Column({ nullable: false})
  modalidade:string
  @Column({ nullable: false})
  eixo:string

}

