import { Entity, PrimaryColumn, Column } from "typeorm"

@Entity("aula")
export default class Aula {
  @PrimaryColumn()
  id_aula: string
  @Column({ nullable: false })
  data_aula: Date
  @Column({ nullable: false })
  status_aula: string
  @Column()
  fk_tuma: string
  @Column()
  fk_unidade: string
  constructor() {}
}
