import { Router } from "express"
import { controllerCurso } from "../controllers/controllersCurso"
import { ControlerAula } from "../controllers/ControllerAula"
import { ControllerTurma } from "../controllers/controllerTurma"
import { ControllerRecesso } from "../controllers/controllerRecesso"
import { ControllerUnidade } from "../controllers/controllersUnidade"

const rotas = Router()

rotas.get("/", (request, response) => {
  return response.json("home page")
})

// Aula
rotas.get("/aula", new ControlerAula().readAll)
rotas.post("/aula", new ControlerAula().create)
rotas.get("/aula/:id_aula", new ControlerAula().readOne)
rotas.put("/aula/:id_aula", new ControlerAula().update)
rotas.delete("/aula/:id_aula", new ControlerAula().delete)
rotas.get("/aula/:data_aula", new ControlerAula().filter_data_aula)
rotas.get("/aula/:fk_turma", new ControlerAula().filter_turma)

// Curso
rotas.get("/curso", new controllerCurso().readAll)
rotas.post("/curso", new controllerCurso().create)
rotas.get("/curso/:id_curso", new controllerCurso().readOne)
rotas.put("/curso/:id_curso", new controllerCurso().update)
rotas.delete("/curso/:id_curso", new controllerCurso().delete)
rotas.get("/curso/:eixo", new controllerCurso().filterEixo)
rotas.get("/curso/:modalidade", new controllerCurso().filterModalidade)

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
rotas.get("/unidades/cursos/:fk_curso",new ControllerUnidade().filterCurso)

export default rotas
