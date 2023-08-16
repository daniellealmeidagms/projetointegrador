import { Entity, PrimaryColumn, Column} from "typeorm"
@Entity("unidade")
export default class Unidade {
  //primary key
  @PrimaryColumn()
  id_unidade:string
  @Column()
  descricao_unidade:string
  @Column()
  carga_horaria_unidade:number 
  @Column()
  ordem:number 
  @Column()
  fk_curso:string 
}

//Pablo Pilgrim