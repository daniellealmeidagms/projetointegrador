import { Entity, PrimaryColumn, Column } from "typeorm"

@Entity ("recesso")
export default class Recesso {
@PrimaryColumn()
id_recesso:String
@Column({nullable:false})
descricao_recesso: String
@Column({nullable:false})
data_recesso: Date
constructor(){
  
}
}