import { Router } from "express"
import { ControllerCurso } from "../controllers/controllerCurso"
import { ControllerAula } from "../controllers/ControllerAula"
import { ControllerTurma } from "../controllers/controllerTurma"
import { ControllerRecesso } from "../controllers/controllerRecesso"
import { ControllerUnidade } from "../controllers/controllersUnidade"

const rotas = Router()

rotas.get("/", (request, response) => {
  return response.json("home page")
})

// Aula
rotas.get("/aulas", new ControllerAula().readAll)
rotas.post("/aulas", new ControllerAula().create)
rotas.get("/aulas/:id_aula", new ControllerAula().readOne)
rotas.put("/aulas/:id_aula" , new ControllerAula().update)
rotas.delete("/aulas/:id_aula", new ControllerAula().delete)
rotas.get("/aulas/data/:data_aula", new ControllerAula().filter_data_aula)
rotas.get("/aulas/turma/:fk_turma", new ControllerAula().filter_turma)

// Curso
rotas.get("/cursos", new ControllerCurso().readAll)
rotas.post("/cursos", new ControllerCurso().create)
rotas.get("/cursos/:id_curso", new ControllerCurso().readOne)
rotas.put("/cursos/:id_curso", new ControllerCurso().update)
rotas.delete("/cursos/:id_curso", new ControllerCurso().delete)
rotas.get("/cursos/eixo/:eixo", new ControllerCurso().filterEixo)
rotas.get("/cursos/modalidade/:modalidade", new ControllerCurso().filterModalidade)

// Turma
rotas.get("/turmas", new ControllerTurma().readAll)
rotas.post("/turmas", new ControllerTurma().create)
rotas.get("/turmas/:id_turma", new ControllerTurma().readOne)
rotas.put("/turmas/:id_turma", new ControllerTurma().update)
rotas.delete("/turmas/:id_turma", new ControllerTurma().delete)
rotas.get("/turmas/turnos/:turno", new ControllerTurma().filterTurno)

// Recesso
rotas.get("/recessos", new ControllerRecesso().readAll)
rotas.post("/recessos", new ControllerRecesso().create)
rotas.get("/recessos/:id_recesso", new ControllerRecesso().readOne)
rotas.put("/recessos/:id_recesso", new ControllerRecesso().update)
rotas.delete("/recessos/:id_recesso", new ControllerRecesso().delete)

// Unidade
rotas.get("/unidades", new ControllerUnidade().readAll)
rotas.post("/unidades", new ControllerUnidade().create)
rotas.get("/unidades/:id_unidades", new ControllerUnidade().readOne)
rotas.put("/unidades/:id_unidades", new ControllerUnidade().update)
rotas.delete("/unidades/:id_unidades", new ControllerUnidade().delete)
rotas.get("/unidades/horario/:carga_horaria_unidade", new ControllerUnidade().filterTime)
rotas.get("/unidades/cursos/:fk_curso", new ControllerUnidade().filterCurso)

export default rotas
