class Recesso {
  recessos: string[]

  constructor() {
    this.recessos = ["2023-02-09", "2023-02-12", "2023-02-13", "2023-02-14"]
  }
}

class Turma {
  recesso: Recesso
  aulas: string[]

  constructor() {
    this.recesso = new Recesso()
    this.aulas = [
      "2023-02-01",
      "2023-02-02",
      "2023-02-03",
      "2023-02-04",
      "2023-02-05",
      "2023-02-06",
      "2023-02-07",
      "2023-02-08",
      "2023-02-09",
      "2023-02-10",
      "2023-02-11",
      "2023-02-12",
      "2023-02-13",
      "2023-02-14",
    ]
  }

  create() {
    console.log("A turma foi criada")
  }

  calcularDiasLetivos() {
    const turma = {
      carga_horaria: 250,
      aulas_por_dia: 4,
      data_inicio: "2023-02-01",
    }
    const sum = turma.carga_horaria / turma.aulas_por_dia
    const diasLetivos = Math.ceil(sum)
    console.log(diasLetivos)
  }

  isWeekend(date: string) {
    const setDate = new Date(date)
    return setDate.getDay() === 6 || setDate.getDay() === 0
  }

  criarAula(date: string) {
    if (this.isWeekend(date)) {
      console.log("Final de semana")
    } else {
      console.log("Dia útil")
    }
  }

  verificarFinalDeSemana(date: Date) {
    if (this.isWeekend(date.toISOString())) {
      console.log("É final de semana")
    } else {
      console.log("Não é final de semana")
    }
  }

  cancelarAula(date: string) {
    const index = this.aulas.indexOf(date)
    if (index !== -1) {
      this.aulas.splice(index, 1)
      console.log(`Aula em ${date} foi cancelada.`)

      for (let i = index; i < this.aulas.length; i++) {
        if (!this.recesso.recessos.includes(this.aulas[i])) {
          const currentDate = new Date(this.aulas[i])
          currentDate.setDate(currentDate.getDate() + 1)
          this.aulas[i] = currentDate.toISOString().split("T")[0]
        }
      }

      const lastAulaDate = new Date(this.aulas[this.aulas.length - 1])
      lastAulaDate.setDate(lastAulaDate.getDate() + 1)
      console.log(
        `Nova data de término da turma: ${
          lastAulaDate.toISOString().split("T")[0]
        }`
      )
    } else {
      console.log("Aula não encontrada.")
    }
  }
}

const minhaTurma = new Turma()

minhaTurma.criarAula("Nov 14, 2023")
minhaTurma.create()
minhaTurma.calcularDiasLetivos()

const dataAtual = new Date()
minhaTurma.verificarFinalDeSemana(dataAtual)

minhaTurma.cancelarAula("2023-02-07")
