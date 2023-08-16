import {Entity, PrimaryColumn, Column} from "typeorm"

@Entity("aula")
export default class Aula{

@PrimaryColumn()
id_aula: String
@Column({nullable: false})
data_aula: Date
@Column({nullable: false})
status_aula: String
@Column()
fk_tuma: String
@Column()
fk_unidade: String
constructor(){
  
}
}