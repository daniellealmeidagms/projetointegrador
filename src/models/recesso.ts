import { Entity, PrimaryColumn, Column } from "typeorm"

@Entity("recesso")
export default class Recesso {
  @PrimaryColumn()
    id_recesso: string;

  @Column({ nullable: false })
  descricao_recesso: string;

  @Column({ nullable: false })
  data_recesso: Date;

  constructor () {
    
  }
}