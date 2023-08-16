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

@Entity("turma")
export default class Turma {
  @PrimaryColumn()
  id_turma: string
  @Column()
  data_inicil: Date
  @Column()
  data_fim: Date
  @Column()
  horas_aula_dia: Number 
  @Column()
  fk_curso: string
}
