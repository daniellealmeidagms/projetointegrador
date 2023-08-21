import { Router, response } from 'express';
const rotas= Router()
rotas.get("/",(request,response)=>{
  return response.json("home page")
})
export default rotas