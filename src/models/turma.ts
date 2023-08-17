/*
CREATE TABLE "turma" (
  "id_turma" varchar PRIMARY KEY,
  "data_inicio" date NOT NULL,
  "data_fim" date,
  "horas_aula_dia" integer NOT NULL DEFAULT 10,
  "fk_curso" varchar
);
*/

import { Entity, PrimaryColumn, Column } from 'typeorm';
import { v4 as uuid } from "uuid"
@Entity("turma")
export default class Turma {
  @PrimaryColumn()
  id_turma: string
  @Column({ nullable: false })
  data_inicio: Date
  @Column()
  data_fim: Date
  @Column({ nullable: false })
  horas_aula_dia: Number 
  @Column()
  fk_curso: string
  constructor() {
    this.id_turma = uuid()
  }
}
