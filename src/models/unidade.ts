

import { Entity, PrimaryColumn, Column} from "typeorm"
@Entity("unidade")
export default class Unidade {
  //primary key
  @PrimaryColumn()
  id_unidade:string
  //atributos
  @Column({nullable: false})
  descricao_unidade:string
  @Column({nullable: false})
  carga_horaria_unidade:number 
  @Column({nullable: false})
  ordem:number 
  @Column()
  fk_curso:string 
  constructor(){

  }
}