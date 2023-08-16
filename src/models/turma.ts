import {Entity, PrimaryColumn, Column} from "typeorm"

@Entity("turma")
export default class Turma {

@PrimaryColumn()
id_aluno: string
@Column()
data_inicio: Date
@Column()
data_fim: Date
@Column({nullable: false})
horas_aula_dia: Number 
@Column()
fk_curso: string
constructor (){
  
}
}