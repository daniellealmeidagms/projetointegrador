import { Entity, PrimaryColumn, Column, IntegerType } from 'typeorm';

@Entity("unidade")
export default class Unidade {
  @PrimaryColumn()
  id_unidade: string
  @Column({nullable: false})
  descricao_unidade: string
  @Column({nullable: false})
  carga_horaria_unidade: number
  @Column({nullable: false})
  ordem: string
  @Column()
  fk_curso: string
  constructor(){
    
  }
} 