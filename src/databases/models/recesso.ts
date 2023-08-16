import { Entity,PrimaryColumn,Column,  } from 'typeorm'

@Entity("recesso")
export default class Recesso{

  @PrimaryColumn()
  id_recesso: string

  @Column()
  descricao_recesso : string

  @Column()
  data_recesso : Date
}
