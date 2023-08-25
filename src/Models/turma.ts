import { Entity, PrimaryColumn, Column } from "typeorm"
import {v4 as uuid } from "uuid"
@Entity("turma")
export default class Turma {
  //chave primária
  @PrimaryColumn()
  id_turma: string
  //atributos
  @Column({ nullable: false })
  data_inicio: Date
  @Column({ nullable: false })
  data_fim: Date
  @Column({ nullable: false })
  horas_aula_dia: Number
  @Column()
  fk_curso: string
  @Column()
  turno: string
  constructor() {
    this.id_turma = uuid() 
  }
}
/*
CREATE TABLE "turma" (
  "id_turma" varchar PRIMARY KEY,
  "data_inicio" date NOT NULL,
  "data_fim" date,
  "horas_aula_dia" integer NOT NULL DEFAULT 10,
  "fk_curso" varchar
);
*/
