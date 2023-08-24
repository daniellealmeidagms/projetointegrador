import { Entity, PrimaryColumn, Column } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("Turma")
export default class Turma {
  @PrimaryColumn()
  id_turma: string
  @Column()
  data_inicio: Date
  @Column()
  data_fim: Date
  @Column({ nullable: false })
  horas_aula_dia: Number
  @Column()
  fk_curso: string
  constructor() {
    this.id_turma = uuid()
  }
}
