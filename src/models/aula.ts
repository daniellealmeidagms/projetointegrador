import { Entity,PrimaryColumn,Column } from 'typeorm';
@Entity('aula')

export default class aula{
  @PrimaryColumn()
  id_aulas:string
@Column({nullable:false})
data_aula:Date
@Column({nullable:false})
status_aula:string
@Column()
fk_turma:string
@Column()
fk_unidade:string
constructor(){

}
}