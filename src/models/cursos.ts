import { Entity, PrimaryColumn, Column } from "typeorm"
import { v4 as uuid } from "uuid"
@Entity("curso")
export default class curso {
  @PrimaryColumn()
  id_curso: string
  @Column({ nullable: false })
  descricao_curso: string
  @Column({ nullable: false })
  carga_horaria_curso: number
  @Column({ nullable: false })
  modalidade: string
  @Column()
  eixo: string
  constructor(){
    this.id_curso = uuid()
  }
}