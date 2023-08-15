import { DataSource } from "typeorm";
export const AppDataSourse = new DataSource({
  type: "postgres",
  host:"localhost",
  port: 5432,
  username:"postgres",
  password:"postgres",
  database:"cronogramas",
  synchronize:true,
  logging:true,
})